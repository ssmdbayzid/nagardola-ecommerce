const Product = require("../Schema/productScema");

exports.postProduct = async (req, res)=>{
    try {
        const newProduct = req.body;
        console.log(newProduct)

        const result = await Product.create(newProduct);
        return res.status(200).json({success: true, data: result})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.updateProduct = async (req, res)=> {
    try {
        const id  = req.params.id;
        const updateData = req.body;

        await Product.findByIdAndUpdate(id, updateData)
        return res.status(200).json({success: true, message: "Updated Successfully"})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.getAllProduct = async (req, res)=>{
    try {
        const products = await Product.find();        
        return res.status(200).json({success: true, data: products});
    } catch (error) {
        return res.status(404).json({success: false, message: "Data not found"})
    }
}

exports.getSingleProduct = async (req, res)=>{    
    try {
        const id = req.params.id;
        const result = await Product.findById({_id: id})
        .populate("reviews");
        return res.status(200).json({success: false, message: "Get Data Successfull",data: result});
    } catch (error) {
       return res.status(500).json({success: false, message: error.message})
    }
}