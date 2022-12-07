const Invoice = require('../../Model/invoice') 

module.exports.getInvoice = async(req, res) => {
    const userInvoices = await Invoice.find({userId: req.token_data._id})
    res.json({
            error: false,
            success: true,
            invoice: userInvoices
        }
    )
};

module.exports.postInvoice = async (req, res) => {
  const {invoiceNumber, invoiceDate, dueDate, referenceNumber, customerName, billingAddress, shippingAddress, description, termsAndCondition, eSign, companyLogo, companyName, companyAddress, entityId, gstNumber, qrHeading, qrImage, itemCount} = req.body;
  if (!customerName || !billingAddress || !companyName) {
    res.json(
        {
            error: true,
            success: false,
            message: "Some of the requried fields are missing!!!"
        }
    )
  }
  else if(itemCount < 1 || itemCount === undefined || itemCount === null)
  {
    res.json(
        {
            error: true,
            success: false,
            message: "Insufficient Items!!!"
        }
    )
  }
  else
  {
    const prevInvoices = await Invoice.find({userId: req.token_data._id})
    var date = new Date().toLocaleDateString()
    date = date.split('/')
    const invid = prevInvoices.length + 1
    const year = date[2];
    var invoiceId = "INV" +year + "-" + "0000" + invid

    const invoice = {
            userId: req.token_data._id,
            invoiceNumber: invoiceId, 
            invoiceDate, 
            dueDate, 
            referenceNumber, 
            customerName, 
            billingAddress, 
            shippingAddress, 
            description, 
            termsAndCondition, 
            eSign, 
            companyLogo, 
            companyName, 
            companyAddress, 
            entityId, 
            gstNumber, 
            qrHeading, 
            qrImage
    }
    await Invoice.create(invoice).then(()=>{
        res.json(
            {
                error: false,
                success: true,
                message: "Invoice created successfully...."
            }
        )
    }).catch(err=>{
        res.json(
            {
                error: true,
                success: false,
                message: "An internal server error has been occurred while creating invoice!!!"
            }
        )
    })
  }
};

// userId: {type: String, require: true}, need to find using token

