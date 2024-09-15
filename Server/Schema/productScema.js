const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the product
const productSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  discountPrice: {type: Number},
  totalRating: {type: Number,min: 0,max: 5},
  images: [{ type: String}],
  reviews: [{type: mongoose.Types.ObjectId, ref: "Review"}],
  details: {type: String,required: true},
  availableColors: [{type: String}],
  size: [{type: String}],
  description: {type: String,required: true},
  specification: [{type: String}],
  washingInstructions: [{type: String}],
  sizeAndFit: [{type: String}],
  soldBy: {type: String, required: true}
});

// Create and export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product

