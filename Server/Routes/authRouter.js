const { register, logIn, googleLogin } = require("../Controller/authController");

const authRouter = require("express").Router();

authRouter.post("/register", register)
authRouter.post("/login", logIn)
authRouter.post("/google", googleLogin)

module.exports = authRouter;
