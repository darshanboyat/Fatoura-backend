const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let today = new Date().toLocaleDateString()
const qoute = new Schema(
    {
        userId: {type: String, require: true},
        qouteNumber: {type: String},
        qouteDate: {type: String, default: today},
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

module.exports = mongoose.model('qoute', qoute)