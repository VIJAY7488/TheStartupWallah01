const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authControllers');
const authentication = require('../utitlities');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/info/:id', authentication, getUserInfo);

module.exports = router;