const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = require('../config/config');
const authentication = require('../utitlities');

//Register
const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    try {
      const isEmailExist = await User.findOne({email});
      if(isEmailExist){
        return res.json({success: false, message: 'Email is already registered.'})
      }
      const hashPassword = await bcrypt.hash(password, 10);  
      const newUser = new User({
        name,
        email,
        password: hashPassword
      });
      await newUser.save();

      res.status(200).json({
        success: true,
        message: 'Account is created successfully.'
      })
    } catch (error) {
       console.log(error);
       res.status(500).json({
        success: false,
        message: "Some error occured",
       }) 
    }
};


//Login
const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try {
      const isUserExist = await User.findOne({email});
      if(!isUserExist){
        return res.json({success: false, message: "User is not found."})
      };

      const comparePassword = await bcrypt.compare(password, isUserExist.password);  

      if(!comparePassword){
        return res.status(401).json({ success: false, message: "Incorrect Password" });
      }

      const token = jwt.sign({
        id:isUserExist._id, email: isUserExist.email
      }, ACCESS_TOKEN_SECRET, {expiresIn: "15m"});

      res.cookie('token', token, {httpOnly: true, secure: false}).json({
        success: true,
        message: 'Login Successfully.',
        userId: isUserExist._id,
        token
      })

    } catch (error) {
       console.log(error);
       res.status(500).json({
        success: false,
        message: "Some error occured",
       }) 
    }
};

//Get User Info
const getUserInfo = async(req, res) => {
  const user = req.body;
  try {
    const isUserExist = await User.findById(req.params.id);
    if(!isUserExist){
      return res.status(400).json({msg: 'User not Found'});
    };

    return res.status(201).json({ 
      success: true, 
      user: {
        name: isUserExist.name
      }
    });

  } catch (error) {
    console.log('Error from User Info : ' + error);
    return res.status(201).json({ success: false, msg: "Error in User Info"});
  }
};

module.exports = {
    registerUser,
    loginUser,
    getUserInfo
}