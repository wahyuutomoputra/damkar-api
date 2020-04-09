const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Petugas = sequelize.define('Petugas',
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nama: {
        type: Sequelize.STRING
    },
    noTelepon: {
        type: Sequelize.STRING
    },
    alamat: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
},
{
    freezeTableName: true
});

module.exports = Petugas;