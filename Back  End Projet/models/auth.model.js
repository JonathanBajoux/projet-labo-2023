const { Sequelize, DataTypes, ModelStatic } = require('sequelize')
/** 
* @param { Sequelize }
* @returns { ModelStatic<any>}
*/
module.exports = (sequelize) => {

    const Auth = sequelize.define('Auth', {

        login:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        hashedPassword: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        jwt: {
            type: DataTypes.STRING(500)
        }
    }, {
        createdAt: true,
        tableName:'Users',
        indexes: [
            {
                name:'UK_Ath__jwt',
                fields: ['login', 'jwt'],
                unique: false,
            },
        ]
    })
    return Auth;
}