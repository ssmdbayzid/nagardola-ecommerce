const { getAllProduct, getSingleProduct } = require("../Controller/ProductController");
const reviewRouter = require("./reviewRouter");

const productRouter =   require("express").Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getSingleProduct);

// Nasted Router
productRouter.use('/:id/reviews', reviewRouter)


module.exports = productRouter;