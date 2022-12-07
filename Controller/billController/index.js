const Bill = require('../../Model/bills')

module.exports.getBills = async (req, res) => {
    const userBills = await Bill.find({userId: req.token_data._id})

    res.json(
        {
            error: false,
            success: true,
            bills: userBills
        }
    )
};

module.exports.postBills = async (req, res) => {
    const {billNumber, billDate, dueDate, referenceNumber, customerName, billingAddress, shippingAddress, description, termsAndCondition, eSign, companyLogo, companyName, companyAddress, entityId, gstNumber, qrHeading, qrImage, itemCount} = req.body;
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
    const prevBills = await Bill.find({userId: req.token_data._id})
    var date = new Date().toLocaleDateString()
    date = date.split('/')
    const id = prevBills.length + 1
    const year = date[2];
    var billId = "BL" +year + "-" + "0000" + id
    
    const bill = {
            userId: req.token_data._id,
            billNumber: billId, 
            billDate, 
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
    await Bill.create(bill).then(()=>{
        res.json(
            {
                error: false,
                success: true,
                message: "bill created successfully...."
            }
        )
    }).catch(err=>{
        res.json(
            {
                error: true,
                success: false,
                message: "An internal server error has been occurred while creating bill!!!"
            }
        )
    })
  }
}