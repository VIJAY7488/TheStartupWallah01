const express = require('express');
const authentication = require('../utitlities');
const { registerUser, loginUser, userLogout } = require('../controllers');


const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout', userLogout);


module.exports = authRouter;