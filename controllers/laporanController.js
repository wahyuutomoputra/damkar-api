const { validationResult } = require('express-validator');
const Laporan = require("../models/laporanModel");

exports.addLaporan = (req, res, next) => {
    let sampleFile = req.files.avatar;

    sampleFile.mv('./uploads/filname2.jpg', function(err){
        if(err){
            return res.status(500).send(err);
        }else{
            res.send('File uploaded!');
        }
    })

    console.log(sampleFile)

}