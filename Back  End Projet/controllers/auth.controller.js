const authValidator = require('../validators/auth.validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');

const authController = {

    register: async(req, res) => {
        //Récupération des données utilisateur
        const authData = req.body;
        
        //validation des informations récupérées depuis les données utilisateur
        const validatedData = await authValidator.validate(authData);

        //Destructurin des données vérifiers
        const { login, password } = validatedData;
        const hashedPassword = bcrypt.hashSync(password, 10);

        //Envoi des données validées et hashées à la DB
        const authInserted = await authService.insert({login, hashedPassword});


        if (authInserted) {
            res
                //information de l'insertion des données s'est correctement bien déroulées, et que le compte est crée
                .status(201)

                //redirige les informations de l'utilisateur sur la route login (ne pas oublier de gérer la redirection dans le front)
                .location(`api/auth/login`)
                .json(authInserted)
    }
},
    login: async (req, res) => {
        try {  
            const { login, password } = req.body;

            //Vérification de l'existence de via son login
            const user = await authService.exist(login);
            if (!user) {

                //Si l'utilisateur n'existe pas, renvois une reponse 401 (Unauthorized)
                return res.status(401).json({message: 'Utilisateur non trouvé'})
            }

            //Vérification de l'existence d'un token (jwt => JsonWebToken) pour l'utilisateur
            const existingToken = await authService.getJwt(user.id);
            if (existingToken.jwt) {
                 //Vérification de la validité du token (jwt)
                 const tokenValid = await authService.verifyJwt(existingToken.jwt);

                 if(tokenValid) {
                    //Le token (jwt) est valide, envoi de l'information dans le header de la requête
                    res.setHeader('Authorization', `Bearer ${existingToken.jwt}`);
                    return res.status(200).json({token: existingToken.jwt});
                 }
            }

            //Vérification du password fourni par l'utilisateur avec le password hashé dans la DB
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
            if(!passwordMatch) {
                //Si les mots de pass ne correspondent pas, renvoi une réponse 401(Unauthorized)
                return res.status(401).json({message:'Mot de passe incorrect'})
            }

            //Si les password correspondent, on va créer un token (jwt) pour l'utilisateur
            const payload = {
                userId: user.id,
                login: user.login
            };

            //Signer le token (jwt) avec le SECRET
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, option);

            //Stocker le token (jwt) dans la DB
            const clientJwt = await authService.addJwt(token,user.id);

            if (clientJwt){
                //Si l'insertion s'est correctement déroulée, on envoi les informations dans le header et au front en json
                res.setHeader('Authorization', `Bearer ${token}`);
                    return res.status(200).json({token})
            }
        } catch (error) {
            console.error(err);
            res.sendstatut(404)            
        }
    }
}
module.exports = authController