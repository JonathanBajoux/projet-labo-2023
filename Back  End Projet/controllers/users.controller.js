const userService = require('../services/users.service');
const userValidator = require('../validators/users.validator');

const usersController = {
    getById: async (req, res) => {

        const { id } = req.params;

        if (isNaN(id)) {
            res.sendStatus(400)
            return;
        }

        const userDTO = await userService.fetchOne(id);

        if (!userDTO) {
            res.sendStatus(404)
            return
        }

        res.status(200).json(userDTO);

    },

    getAll: async (req, res) => {
        try {
            const usersDTO = await userService.fetchAll();
            res.status(200).json(usersDTO);

        } catch (err) {
            console.error(err)
        }

    },
    
    add: async (req, res) => {
        const userData = req.body;
        console.log(userData);

        const validatedData = await userValidator.validate(userData);

        const userInserted = await userService.insert(validatedData);

        res

            .status(201)

            .location(`api/user/${userInserted.id}`)

            .json(userInserted)
    },
    update: async(req, res) => {
        res.sendStatus(501);
    },
    delete: async (req, res) => {

        const { id } = req.parms;

        const isDeleted = await userService.delete(id);

        if (isDeleted) {
            res.sendStatus(204)
            return;
        }

        res.sendStatus(404);

    }
};
 module.exports = usersController;