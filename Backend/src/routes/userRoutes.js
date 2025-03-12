const express = require('express');
const { getUserData } = require('../controllers');

const userRouter = express.Router();


userRouter.get('/get-user-data', getUserData);

module.exports = userRouter;