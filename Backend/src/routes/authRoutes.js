const express = require('express');
const { registerUser, loginUser, userLogout } = require('../controllers');


const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout', userLogout);


module.exports = authRouter;