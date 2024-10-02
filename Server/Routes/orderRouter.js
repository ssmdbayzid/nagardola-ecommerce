const { payment, paymentSuccess, paymentCancel, paymentFailed } = require("../Controller/orderController");

const orderRouter = require("express").Router();

orderRouter.post("/payment", payment);
orderRouter.post("/payment/success/:tran_id", paymentSuccess);
orderRouter.post("/payment/cancel/:tran_id", paymentCancel);
orderRouter.post("/payment/failed/:tran_id", paymentFailed);

module.exports = orderRouter;