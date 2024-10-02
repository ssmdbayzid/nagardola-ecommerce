const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const port = 5000;
dotEnv.config();

const productRouter = require("./Routes/ProductRouter");
const authRouter = require("./Routes/authRouter");
const orderRouter = require("./Routes/orderRouter");

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const connectDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo Database connected")
    } catch (error) {
        console.log(error.message);
    }
}

connectDatabase().catch(error=>console.log(error.message))

// router
app.use("/api/v1/products", productRouter);
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/order", orderRouter)

app.get("/", (req, res)=> {
    res.send("Server running")
});



app.listen(port, ()=> {
    console.log(`Server running with ${port}`)
})