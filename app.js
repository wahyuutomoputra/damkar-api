const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const fileUpload = require('express-fileupload');

const masyarakatRoutes = require('./routes/masyarakat');
const laporanRoutes = require('./routes/laporan');

const app = express();

app.use(fileUpload());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/masyarakat', masyarakatRoutes);
app.use('/laporan', laporanRoutes);


sequelize.sync().then(result => {
    
})
.catch(err => {
    console.log(err);
});

app.listen(8080);

