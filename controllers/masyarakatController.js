const { validationResult } = require('express-validator');
const Masyarakat = require("../models/masyarakatModel")

exports.getUser = (req, res, next) => {
    Masyarakat.findAll()
    .then(masyarakat => {
        res.status(200).json({
            data: masyarakat
        });
    })
    .catch(err => {
        res.status(422).json({
            data: [],
            message: err
        });
    }) 
};

exports.addUser = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            message: "Data not complete",
            errors: errors.array()
        })
    }
    const { nama, noTelepon, email, alamat } = req.body;
    
    Masyarakat.create({
        nama: nama,
        noTelepon: noTelepon,
        email: email,
        alamat: alamat
    }).then(result => {
        res.status(200).json({
            message: "Data berhasil ditambah"
        })
    }).catch(err => {
        console.log('kok')
        res.status(422).json({
            message: "Failed",
            errors: err,
            data: req.body
        })
    })
}

