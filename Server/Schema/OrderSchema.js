const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tran_id: { type: String, required: true },
    totalPrice: { type: String, required: true },
    paymentStatus: {
        type: String, default: "pending",
    },
}, {timestamps: true})

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;