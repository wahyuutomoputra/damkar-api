const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const fileUpload = require('express-fileupload');

const masyarakatRoutes = require('./routes/masyarakat');
const laporanRoutes = require('./routes/laporan');
const authRoutes = require('./routes/auth');
const petugasRoutes = require('./routes/petugas');

const app = express();

app.use(bodyParser.json());
app.use(fileUpload());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/masyarakat', masyarakatRoutes);
app.use('/laporan', laporanRoutes);
app.use('/auth', authRoutes);
app.use('/petugas', petugasRoutes);


sequelize.sync().then(result => {
    //console.log('table already updated')
})
.catch(err => {
    console.log(err);
});

//just api
app.listen(8080);

// const server = app.listen(8080);
// const io = require('socket.io')(server);

// io.on('connection', socket => {
//     console.log('client connected')
// })
