const express = require("express");
const { registerUser, loginUser } = require("../controller/auths.controller");
const { alreadyExists } = require("../middleware/alreadyExists.middleware");
const { checkEmailExistence } = require("../middleware/emailAuth.middleware");

const authRouter = express.Router();

// register user
authRouter.post("/register", alreadyExists, checkEmailExistence, registerUser);
authRouter.post("/login", loginUser);

module.exports = { authRouter };
