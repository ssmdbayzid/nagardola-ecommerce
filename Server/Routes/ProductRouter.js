const { getAllProduct } = require("../Controller/ProductController");

const productRouter =   require("express").Router();

productRouter.get("/", getAllProduct)


module.exports = productRouter;