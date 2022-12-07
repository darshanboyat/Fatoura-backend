const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

const user = new Schema({
    fname: {type: String, require: true},
    lname: {type: String, require: true},
    email: {type: String, require: true},
    number: {type: String, require: true},
    password: {type: String, require: true},
    referaral: {type: String}
}, {timestamps: true})

user.plugin(passportLocalMongoose)
module.exports = mongoose.model("user", user)