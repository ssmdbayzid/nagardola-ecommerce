const { authenticate } = require("../auth/tokenVerify");
const { postReview, getAllReview } = require("../Controller/reviewCollection");

const reviewRouter = require("express").Router({mergeParams: true});

reviewRouter.post("/", authenticate, postReview)
reviewRouter.get("/", getAllReview);

module.exports = reviewRouter;