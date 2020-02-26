const { validationResult } = require('express-validator');
const Laporan = require("../models/laporanModel");

exports.addLaporan = (req, res, next) => {
    let sampleFile = req.files.avatar;
    let nameImage = sampleFile.name.split(' '). join('');

    sampleFile.mv('./uploads/'+nameImage, function(err){
        if(err){
            return res.status(500).send(err);
        }else{
            res.send('File uploaded!');
        }
    })
}