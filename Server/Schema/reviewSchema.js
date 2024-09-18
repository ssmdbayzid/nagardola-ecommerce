const mongoose = require("mongoose");
const  reviewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 5, default: 0,},
    comment: {type: String, required: true},
    photo: {type: String, default: "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png"}
}, {timeStamps: true});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;