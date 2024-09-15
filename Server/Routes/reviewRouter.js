const { authenticate } = require("../auth/tokenVerify");
const { postReview, getAllReview } = require("../Controller/reviewCollection");

const reviewRouter = require("express").Router();

reviewRouter("/").post(authenticate, postReview);
reviewRouter("/").get(getAllReview);

module.exports = reviewRouter;