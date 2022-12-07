const express = require('express')
const port = process.env.PORT || 80
const User = require('./Routes/userRoutes/getUser')
const company = require('./Routes/companyRoutes')
const invoice = require('./Routes/invoiceRoutes')
const bill = require('./Routes/billRoutes')
const qoute = require('./Routes/qouteRoutes')
const purchase = require('./Routes/purchaseOrderRoutes')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')

// const url = "mongodb+srv://darshboyat:3277426269@cluster0.naknvqt.mongodb.net/fatoura?retryWrites=true&w=majority" A duplicate index key error has been occured with this URL
const url = "mongodb://localhost:27017/Fatroua"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('Database Connected Successfully....')).catch(()=> console.log('Ohhhh an error occured'))

app.use(bodyParser.json())
app.use(User)
app.use(invoice)
app.use(bill)
app.use(qoute)
app.use(purchase)
app.use(company)

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})