const SSLCommerzPayment = require('sslcommerz-lts')
const { v4: uuidv4 } = require('uuid');
const User = require('../Schema/userSchema');
const Order = require('../Schema/OrderSchema');

const store_id = 'test64266a735cb58'
const store_passwd = 'test64266a735cb58@ssl'
const is_live = false //true for live, false for sandbox

exports.payment = async (req, res)=>{

    const tran_id = uuidv4();
    const user = await User.find({email: req.email})

    try {        
    
        const data = {
            total_amount: 100,
            currency: 'BDT',
            tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:5000/api/v1/order/payment/success/${tran_id}`,
            fail_url: `http://localhost:5000/api/v1/order/payment/fail/${tran_id}`,
            cancel_url: `http://localhost:5000/api/v1/order/payment/cancel/${tran_id}`,
            ipn_url: 'http://localhost:5000/api/v1/order/payment/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };    
            const sslcz = new SSLCommerzPayment(store_id,store_passwd, is_live)
            sslcz.init(data).then(apiResponse=>{
            // Redirect the user to payment getway
            let GetwayPageUrl = apiResponse.GatewayPageURL;            
            res.send({success: true, url: GetwayPageUrl})
            })

        //     const newOrder = {
        //     user: user._id,
        //     total_amount,
        //     products: req.body.items,
        //     tran_id,
        //     shipping_address,
        // }
    
        // const order = new Order.create(newOrder);
        //  await User.updateOne({_id: user._id}, {
        //     $push : {
        //         $orders: {orders: order._id}
        //     }
        // })
        
    } catch (error) {
        return res.status(505).json({success: false, message: error.message})
    }   
}

exports.paymentSuccess = async (req, res)=>{
    
    try {
        await Order.updateOne({tran_id: req.params.tran_id}, {
            $set: {paymentStatus: "paid"}
        })
        res.redirect("http://localhost:5173/payment/success")
    } catch (error) {
        return res.send(error.message)        
    }               
}

exports.paymentCancel = async (req, res)=>{
    // const tran_id = req.params.tran_id;
     try {        
        await Order.deleteOne({tran_id: req.params.id})        
         res.redirect("http://localhost:5173/payment/cancel")
     } catch (error) {
        return res.send(error.message)
     }
}

exports.paymentFailed = async (req, res)=>{
    try {
    // const tran_id = req.params.tran_id;
    await Order.deleteOne({tran_id: req.params.id})        

    res.redirect("http://localhost:5173/payment/failed")
    } catch (error) {
        return res.send(error.message)        
    }    
}