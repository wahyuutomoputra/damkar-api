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

exports.getUserBy = (req, res, next) => {
    const { id } = req.query;
    
    Masyarakat.findAll({
        where: { id: id }
    })
    .then(result => {
        res.status(200).json({
            data: result
        })
    }).catch(err => {
        res.status(422).json({
            message: err,
            data: []
        })
    })
}

exports.updateUser = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            message: "Data not complete",
            errors: errors.array()
        })
    }
    const { id, nama, noTelepon, email, alamat } = req.body;

    Masyarakat.update({
        nama: nama,
        noTelepon: noTelepon,
        email: email,
        alamat: alamat
    },
    {
        returning: true,
        where: {id: id}
    }).then(result => {
        res.status(200).json({
            message: "Data updated"
        })
    })
}

exports.deleteUser = (req, res, next) => {
    const { id } = req.query;
    
    Masyarakat.destroy({
        where: {id: id}
    }).then(result => {
        res.status(200).json({
            message: "Deleted"
        })
    })
}

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

