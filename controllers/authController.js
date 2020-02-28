const { validationResult } = require('express-validator');
const Masyarakat = require("../models/masyarakatModel");
const jwt = require('jsonwebtoken');

exports.masyarakatLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let loadedUser;

    Masyarakat.findOne({
        where: {
            noTelepon: username
        }
    })
    .then(user => {
        if(!user){
            const error = new Error('Username tidak ditemukan');
            error.message = "Username tidak ditemukan";
            error.statusCode = 401;
            throw error;
        }
        loadedUser = user;
        return password == user.password;
    })
    .then(isEqual => {
        if(!isEqual){
            const error = new Error('Password tidak sesuai');
            error.message = "Password tidak sesuai";
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            nama: loadedUser.nama,
            noTelepon: loadedUser.noTelepon,
            alamat: loadedUser.alamat,

        },'wahyuutomoputra',
        {expiresIn: '1h'});

        res.status(200).json({token:token, data: loadedUser, status: true});
    })
    .catch(error => {
        console.log(error)
        if(!error.statusCode){
            error.statusCode = 500
        }
        if(!error.message){
            error.message = "Internal server error";
        }
        res.status(error.statusCode).json({message: error.message, status: false});
    })
}