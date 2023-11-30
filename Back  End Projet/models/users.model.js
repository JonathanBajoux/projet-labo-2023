const { Sequelize, DataTypes, ModelStatic } = require('sequelize');

/**
 * @param {Sequelize}
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {

    const User = sequelize.define('User', {

        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastname: {
            type:DataTypes.STRING(50),
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        gender: {
            type: DataTypes.ENUM('F','M','X'),
            allowNull: true
        }
    },{
        createdAt: true,
        tableName: 'Users',
        indexes: [
            {
                name: 'UK_User__Name',
                fields: ['firstname', 'lastname'],
                unique: false,
            },
        ]
    })
    return User;
}