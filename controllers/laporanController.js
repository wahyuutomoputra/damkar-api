const { validationResult } = require('express-validator');
const Laporan = require("../models/laporanModel");

exports.addLaporan = (req, res, next) => {
    let sampleFile = req.files.avatar;
    let nameImage = sampleFile.name.split(' ').join('');

    sampleFile.mv('./uploads/'+nameImage, function(err){
        if(err){
            res.status(422).json({
                data: [],
                message: err
            });
        }else{
            const { detail, longitude, latitude, id_masyarakat } = req.body;

            Laporan.create({
                detail: detail,
                longitude: longitude,
                latitude: latitude,
                foto: nameImage,
                id_masyarakat: id_masyarakat
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