const express = require('express')
const { registerUser, loginUser } = require('../controller/auths.controller')
const { alreadyExists } = require('../middleware/alreadyExists.middleware')

const authRouter = express.Router()

// register user
authRouter.post('/register', alreadyExists, registerUser)
authRouter.post('/login', loginUser)