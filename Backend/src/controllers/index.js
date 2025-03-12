const { registerUser, loginUser, userLogout } = require("./authControllers");
const getUserData = require("./userController");

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser,
    userLogout: userLogout,
    getUserData: getUserData
}