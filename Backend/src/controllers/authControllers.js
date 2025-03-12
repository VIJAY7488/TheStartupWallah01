const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = require('../config/config');
const authentication = require('../utitlities');

//Register
const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
      return res.status(400).json({success: false, message: "Missing Details"})
    };

    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const existingUser = await User.findOne({email});
      if(!existingUser){
        return res.status(400).json({success: false, message: 'Email is already registered.'})
      }
  
      const user = new User({
        name,
        email,
        password: hashPassword
      });
      
      await newUser.save();

      const token = jwt.sign({id: user._id}, ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
      });

      res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'Lax', maxAge: 1 * 24 * 60 * 60 * 1000})

      res.status(200).json({
        success: true,
        message: 'Account is created successfully.'
      })
    } catch (error) {
       console.log(error);
       res.status(500).json({
        success: false,
        message: "Error occured from registration.",
       }) 
    }
};


//Login
const loginUser = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
      return res.status(400).json({success: false, message: "Email and password is required"})
    };

    try {
      const user = await User.findOne({email});
      if(!user){
        return res.json({success: false, message: "User not found."})
      };

      const isMatch = await bcrypt.compare(password, user.password);  

      if(!isMatch){
        return res.status(400).json({ success: false, message: "Invalid Password" });
      }

      const token = jwt.sign({
        id:user._id}, ACCESS_TOKEN_SECRET, {expiresIn: "15m"});

      res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'Lax', maxAge: 15 * 60 * 1000})
      
      res.status(200).json({
        success: true,
        message: 'Login Successfully.',
      })

    } catch (error) {
       console.log(error);
       res.status(500).json({
        success: false,
        message: "Some error occured",
       }) 
    }
};


//Logout
const userLogout = async(req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 15 * 60 * 1000
    });

    return res.status(200).json({success: true, message: "User logout successfully."})
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, message: "Error occured from logout."})
  }
};



module.exports = {
    registerUser,
    loginUser,
    userLogout
}