const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let today = new Date().toLocaleDateString()
const invoice = new Schema(
    {
        userId: {type: String, require: true},
        invoiceNumber: {type: String},
        invoiceDate: {type: String, default: today},
        dueDate: {type: String},
        referenceNumber: {type: String},
        customerName: {type: String, require: true},
        billingAddress: {type: String, require: true},
        shippingAddress: {type: String},
        description: {type: String},
        termsAndCondition: {type: String},
        eSign: {type: String},
        companyLogo: {type: String},
        companyName: {type: String, require: true},
        companyAddress: {type: String},
        entityId: {type: String},
        gstNumber: {type: String},
        qrHeading: {type: String},
        qrImage: {type: String},
        paymentStatus: {type: String, default: "unpaid"},
    }
)

module.exports = mongoose.model('invoice', invoice)