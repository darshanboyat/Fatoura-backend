const express = require('express')
const auth = require('../../Controller/userController')

const router = express.Router();

router.post('/auth/login', auth.login)

module.exports = router