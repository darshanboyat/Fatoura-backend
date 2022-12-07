const express = require('express')
const Qoute = require('../../Controller/QouteController')
const Authentication = require('../../Middlewares/Authorization')

const router = express.Router();

router.get('/qoute',  Authentication.verifyToken, Qoute.getQoute)
router.post('/qoute', Authentication.verifyToken,  Qoute.postQoute)

module.exports = router