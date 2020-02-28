const express = require('express');
const { body } = require('express-validator');

const laporanController = require('../controllers/laporanController');
const isAuth = require("../middleware/is-auth");

const router = express.Router();

//contoh router dengan pengecekan
//router.post('/addLaporan', isAuth, laporanController.addLaporan);
router.post('/addLaporan', laporanController.addLaporan);


module.exports = router;