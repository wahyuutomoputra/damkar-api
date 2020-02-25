const express = require('express');
const { body } = require('express-validator');

const masyarakatController = require('../controllers/masyarakatController');

const router = express.Router();

router.get('/getUser', masyarakatController.getUser);

router.post('/addUser', [
    body('nama').notEmpty(),
    body('email').notEmpty(),
    body('alamat').notEmpty(),
    body('noTelepon').notEmpty()
], masyarakatController.addUser);

module.exports = router;