const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let today = new Date().toLocaleDateString()
const purchase = new Schema(
    {
        userId: {type: String, require: true},
        purchaseNumber: {type: String},
        purchaseDate: {type: String, default: today},
        referenceNumber: {type: String},
        customerName: {type: String, require: true},
        billingAddress: {type: String, require: true},
        description: {type: String},
        termsAndCondition: {type: String},
        companyLogo: {type: String},
        companyName: {type: String, require: true},
        companyAddress: {type: String},
        entityId: {type: String},
        gstNumber: {type: String},
        paymentStatus: {type: String, default: "unpaid"},
    }
)

module.exports = mongoose.model('purchase', purchase)