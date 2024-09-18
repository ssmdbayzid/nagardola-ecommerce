const Product = require("../Schema/productScema");
const Review = require("../Schema/reviewSchema");

exports.postReview = async (req, res)=>{
    try {
        const id = req.params.id;

        const data = req.body;        
        const review = await Review.create(req.body);
               
        await Product.findByIdAndUpdate(id, {
        $push: {reviews:review._id},
        $inc: {totalRating:  req.body.rating,}
        })        
        

      return res.status(200).json({success: true, data,  message: "Thanks for your feedback."});
    } catch (error) {
      return res.status(500).json({success: false, message: error.message})
    }
}

exports.getAllReview = async (req, res)=> {
  try {
    const result  = await Review.find();
    return res.status(200).json({success: true, data: result});
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}