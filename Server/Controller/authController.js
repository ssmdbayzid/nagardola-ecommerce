const jwt = require("jsonwebtoken");
const User = require("../Schema/userSchema");
const bcrypt = require("bcrypt");


exports.register = async(req, res)=>{
    try {
        const email = req.body.email;   
        const password = req.body.password;

        const existUser = await User.findOne({email: email});
        if(existUser) return (res.status(400).json({success: false, message: "Already have an account, Please Log In"}))
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        await User.create({
            email,
            password: hashPassword,
        });   
        return res.status(200).json({success:true, message: "User created successfully"})     
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.logIn = async (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
    
    const existUser = await User.findOne({email: email});   
    try {
    if(!existUser) {
        return res.status(400).json({success: false, message: "Donot have an account, Please register"})
    }
    const isPasswordMatched = await bcrypt.compare(password, existUser.password)
    if(!isPasswordMatched){
        return res.status(401).json({success: false, message: "Invalid Credential"})
    }

    const accessToken = jwt.sign({email: existUser.email}, process.env.ACCESS_TOKEN, {expiresIn: '7d'})

    return res.status(200).json({success: true, data: existUser, token: accessToken})
    
        
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

exports.googleLogin = async(req, res)=>{
    try {
        const email = req.body.email;
        const user = await User.findOne({email: email});
        
        if(!user){
           const newUser =  await User.create(req.body);
           const accessToken = jwt.sign({email: req.body.email}, process.env.ACCESS_TOKEN, {expiresIn: '7d'})
           return res.status(200).json({success: true, data: newUser, message: "Create Account Successfully", token: accessToken})
        }
        const accessToken = jwt.sign({email: req.body.email}, process.env.ACCESS_TOKEN, {expiresIn: '10h'})

        return res.status(200).json({success: true, data: user, token: accessToken})
    } catch (error) {
        return res.status(500).json({success: false, message: error.message})
    }
}

