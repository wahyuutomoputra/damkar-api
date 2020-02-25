const sequelize = require('../config/database');

sequelize.sync().then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
});