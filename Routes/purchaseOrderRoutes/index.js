const express = require('express')
const purchare = require('../../Controller/purchaseOrderController')
const Authentication = require('../../Middlewares/Authorization')

const router = express.Router();

router.get('/purchase',  Authentication.verifyToken, purchare.getPurchareOrder)
router.post('/purchase', Authentication.verifyToken,  purchare.postPurchareOrder)

module.exports = router