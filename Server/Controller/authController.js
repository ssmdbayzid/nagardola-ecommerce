const jwt = require("jsonwebtoken");

exports.register = async(req, res)=>{
    try {
        const email = req.body.email;
        const existUser = await User.findOne({email: email});
        if(existUser) return (res.status(400).json({success: false, message: "Already have an account, Please Log In"}))
        await User.create(req.body);
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.logIn = async (req, res)=> {
    const email = req.body.email;
    const existUser = await User.findOne({email: email});   
    try {
    if(!existUser) return (res.status(400).json({success: false, message: "Donot have an account, Please register"}))
    const accessToken = jwt.sign({email: existUser.email}, process.env.ACCESS_TOKEN, {expiresIn: '7d'})

    return res.status(200).json({success: true, data: existUser, token: accessToken})
        
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.googleLogin = async(req, res)=>{
    try {
        const email = req.body;
        const user = await User.findOne({email: email});
        
        if(!user){
           const newUser =  await User.create(req.body);
           const accessToken = jwt.verify(email,process.env.ACCESS_TOKEN, {expiresIn: '7d'})
           return res.status(200).json({success: true, data: newUser, message: "Create Account Successfully", token: accessToken})
        }
        return res.status(200).json({success: true, data: user, token: accessToken})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

