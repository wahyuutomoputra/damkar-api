const express = require('express');
const { body } = require('express-validator');

const laporanController = require('../controllers/laporanController');

const router = express.Router();

router.post('/addLaporan', laporanController.addLaporan);


module.exports = router;