const Purchase = require('../../Model/purchase')

module.exports.getPurchareOrder = async(req, res) => {

    let userPurchases = await Purchase.find({userId: req.token_data._id})

    res.json(
        {
            error: false,
            success: true,
            purchase: userPurchases
        }
    )    
};

module.exports.postPurchareOrder = async(req, res) => {
    const {purchaseNumber, purchaseDate, referenceNumber, customerName, billingAddress, description, termsAndCondition, companyLogo, companyName, companyAddress, entityId, gstNumber, itemCount} = req.body

    if(!customerName || !billingAddress || !companyName || !companyAddress)
    {
        res.json(
            {
                error: true,
                success: false,
                message: "Some of the required field are missing!!!"
            }
        )
    }
    else if(itemCount < 1 || itemCount === undefined || itemCount === null)
    {
        res.json(
            {
                error: true,
                success: false,
                message: "Insufficient Item!!!"
            }
        )
    }
    else{
        const prevPO = await Purchase.find({userId: req.token_data._id})
        var date = new Date().toLocaleDateString()
        date = date.split('/')
        const id = prevPO.length + 1
        const year = date[2];
        var purchaseId = "PO" +year + "-" + "0000" + id

        const purchase = {
            userId: req.token_data._id,
            purchaseNumber: purchaseId, 
            purchaseDate, 
            referenceNumber, 
            customerName, 
            billingAddress, 
            description, 
            termsAndCondition, 
            companyLogo, 
            companyName, 
            companyAddress, 
            entityId, 
            gstNumber
        }
        
        await Purchase.create(purchase).then(response => {
            res.json(
                {
                    error: false,
                    success: true,
                    message: "Purchase order created successfully...."
                }
            )
        }).catch(err => {
            res.json(
                {
                    error: true,
                    success: false,
                    message: "An internal server error has been occurred!!!"
                }
            )
        })

    }
};