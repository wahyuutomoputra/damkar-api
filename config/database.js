const Sequelize = require('sequelize');

//db, username, password, db type and host
const sequelize = new Sequelize('latihan','root','icon0SSgandul',{
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});

module.exports = sequelize;