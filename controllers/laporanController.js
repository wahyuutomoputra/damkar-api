const { validationResult } = require('express-validator');
const Laporan = require("../models/laporanModel");

exports.addLaporan = (req, res, next) => {
    let sampleFile = req.files.foto;
    let nameImage = sampleFile.name.split(' ').join('');

    sampleFile.mv('./uploads/'+nameImage, function(err){
        if(err){
            res.status(422).json({
                data: [],
                message: err
            });
        }else{
            console.log(req.body)
            const { detail, longitude, latitude, idMasyarkat } = req.body;

            Laporan.create({
                idMasyarkat: idMasyarkat,
                detail: detail,
                longitude: longitude,
                latitude: latitude,
                foto: nameImage,
            })
            .then(result => {
                res.status(200).json({
                    message: "Data created"
                })
            }).catch(err => {
                res.status(422).json({
                    message: err
                });
            })
        }
    })
}