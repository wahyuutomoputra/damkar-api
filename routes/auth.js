const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/masyarakatLogin', authController.masyarakatLogin);


module.exports = router;