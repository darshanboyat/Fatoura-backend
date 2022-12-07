const express = require('express')
const Invoice = require('../../Controller/invoiceController')
const Authentication = require('../../Middlewares/Authorization')

const router = express.Router();

router.get('/invoice',  Authentication.verifyToken, Invoice.getInvoice)
router.post('/invoice', Authentication.verifyToken,  Invoice.postInvoice)

module.exports = router