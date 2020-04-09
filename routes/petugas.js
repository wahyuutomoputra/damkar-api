const express = require('express');
const { body } = require('express-validator');

const petugasController = require('../controllers/petugasController');

const router = express.Router();

router.get('/getUser', petugasController.getUser);
router.get('/getUserBy', petugasController.getUserBy);

router.post('/addUser', [
    body('nama').notEmpty(),
    body('email').notEmpty(),
    body('alamat').notEmpty(),
    body('noTelepon').notEmpty()
], petugasController.addUser);

router.post('/updateUser',[
    body('id').notEmpty()
], petugasController.updateUser)

router.get('/deleteUser', petugasController.deleteUser)

module.exports = router;