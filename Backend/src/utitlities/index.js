const jwt = require('jsonwebtoken');

function authentication(req, res, next){
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ Error: true, msg: "Access Denied. No token provided." });
    }


    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).json({ Error: true, msg: "Invalid token." });
    }
}

module.exports = authentication;