exports.getAllProduct = async (req, res)=>{
    try {
        // const products = await 
        return res.status(500).json({success: true, data: "All Product is Here"});
    } catch (error) {
        return res.status(404).json({success: false, message: "Data not found"})
    }
}