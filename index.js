const express = require('express')
const port = process.env.PORT || 80;
const User = require('./Routes/userRoutes/getUser')
const company = require('./Routes/companyRoutes')
const invoice = require('./Routes/invoiceRoutes')
const bill = require('./Routes/billRoutes')
const qoute = require('./Routes/qouteRoutes')
const purchase = require('./Routes/purchaseOrderRoutes')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

const url = "mongodb+srv://darshboyat:3277426269@cluster1.onjgrzp.mongodb.net/?retryWrites=true&w=majority" // A duplicate index key error has been occured with this URL
// const url = "mongodb://localhost:27017/Fatroua"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('Database Connected Successfully....')).catch(()=> console.log('Ohhhh an error occured'))

app.use(bodyParser.json())
app.use(cors())

app.use(cors({
    origin: "*",
}))
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'https://fatoura-five.vercel.app');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//     });

app.use(User)
app.use(invoice)
app.use(bill)
app.use(qoute)
app.use(purchase)
app.use(company)

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})