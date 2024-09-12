const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const cors = require("cors");
const productRouter = require("./Routes/ProductRouter");
dotEnv.config();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// router
app.use("/api/v1/products", productRouter);

app.get("/", (req, res)=> {
    res.send("Server running")
});



app.listen(port, ()=> {
    console.log(`Server running with ${port}`)
})