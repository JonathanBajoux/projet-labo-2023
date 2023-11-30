const authDTO = require('../dto/auth.dto');
const db = require('../models');
const jwt = require('jsonwebtoken');

const authService = {
    
    exist: async(login) => {
        const auth = await db.Auth.findOne({
            where: { login }
        });

        return new authDTO(auth);

    },

    insert: async (data) => {
        const auth = await db.Auth.create(data)
        return new authDTO(auth)
    },

    addJwt: async (jwt, id) => {
        const userFound = await db.Auth.findOne({
            where: { id }
        });

        await userFound.update({jwt})

        return userFound;

    },

    getJwt: async (id) => {
        const jwtExist = await db.Auth.findOne({
            where: { id }
        });

        return jwtExist;
    },

    verifyJwt: async (token) => {
        const secret = process.env.JWT_SECRET;

        try {
            const decoded = jwt.verify(token, secret);
            return true
        } catch (error) {
            return false
        }
    }
};

module.exports = authService;