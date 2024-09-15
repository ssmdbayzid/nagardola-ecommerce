const { register, logIn, googleLogin } = require("../Controller/authController");

const authRouter = require("express").Router();

authRouter("/sign-up").post(register);
authRouter("/log-in").post(logIn)
authRouter("/google").post(googleLogin)

appRouter("/:").get();

modules.exports = authRouter;
