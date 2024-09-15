const Product = require("../Schema/productScema");
const Review = require("../Schema/reviewSchema");

exports.postReview = async (req, res)=>{
    try {
        const _id = req.params.id;
        const review = await Review.create(req.body);

        await Product.findByIdAndUpdate(_id, {
        $push: {reviews:review._id},
        $inc: {totalReview:  req.body.rating,}
        })

      return res.status(200).json({success: true, message: "Thanks for your feedback."});
    } catch (error) {
      return res.status(500).json({success: false, message: error.message})
    }
}

exports.getAllReview = async (req, res)=> {
  try {
    const result  = await Review.find();
    return res.status(200).json({successfull, data: result});
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}