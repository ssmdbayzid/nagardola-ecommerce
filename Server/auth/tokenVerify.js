const jwt = require("jsonwebtoken");

exports.authenticate = async (req, res, next)=>{
    const authorization = req.headers.authorization;

    if(!authorization || !authorization.startsWith('Bearer ')){
        return res.status(401).json({success: false, message: "No token, Access denied"});
    }
    try {
        const token = authorization.split(" ")[1];        

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.email = decoded.email;
        next()
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}