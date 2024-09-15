const mongoose = require("mongoose");
const  reviewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 0, default: 0,},
    comment: {type: String, required: true},
}, {timeStamps: true});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;