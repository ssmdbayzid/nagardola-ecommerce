exports.createOrder = async (req, res)=>{
    try {
        const user = await User.findOne({email: req.email})
        const data = await Order.find({_id: user._id});
        return res.status(200).json({success: false, data: data})
    } catch (error) {
        
    }
}