const User = require("../models/userModels");


//Get User Info
const getUserData = async(req, res) => {
    const {userId} = req.body;
    try {
      const user = await User.findById(userId);
      if(!user){
        return res.status(400).json({success: false, message: 'User not Found'});
      };
  
      res.status(200).json({
        success: true,
        userData: {
            name: user.name,
            email: user.email,
        }
      })
  
    } catch (error) {
      console.log(error);
      return res.status(201).json({ success: false, message: "Error in getUserData"});
    }
  };

  module.exports = getUserData;