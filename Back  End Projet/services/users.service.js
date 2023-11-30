const { UsersDTO, UsersDetailDTO } = require('../dto/Users.dto');
const db = require('../models');
// Importation de l'objet Op de Sequelize pour gérer les opérateurs spéciaux dans les requêtes de base de données.
const { Op } = require('sequelize');

const UserService = {
    fetchAll: async () => {
        const Users = await db.Users.findAll()
        return Users.map(use => new UsersDTO(use))
    },

    fetchOne: async (id) => {
        const Users = await db.Users.findOne({
            where: { id } // --> { id : id }
        });

        return new UsersDetailDTO(Users);
    },

    fetchFun: async () => {
        const Users = await db.Users.findAll({
            where: db.Sequelize.or(
                {
                    firstname: {
                        [Op.like]:'John'
                    }
                },
                {
                    firstname: {
                        [Op.like]: 'Jacqouille'
                    }
                }
            )
        });

        return Users.map(use => new UsersDTO(use))
    },

    insert: async (data) => {
        const Users = await db.Users.create(data)
        return new UsersDetailDTO(Users)
    },

    delete: async (id) => {
        const nbRowDeleted = await db.Users.destroy({
            where: {id} // --> { id: id}
        });

        return nbRowDeleted === 1;
    }
};

module.exports = UserService