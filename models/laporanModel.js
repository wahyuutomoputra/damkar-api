const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Laporan = sequelize.define('Laporan',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    detail: {
        type: Sequelize.STRING
    },
    longitude: {
        type: Sequelize.STRING
    },
    latitude: {
        type: Sequelize.STRING
    },
    foto: {
        type: Sequelize.STRING
    },
    idMasyarkat: {
        type: Sequelize.INTEGER
    }
})

module.exports = Laporan;