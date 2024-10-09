const user=require("../Models/user-model");
const bcrypt=require('bcryptjs');
const home=async (req, res)=>{
    try {
        res.status(200).send("Welcome to first backend program");    
    } catch (error) {
        console.log(error);
    }
}
const register=async (req, res)=>{
    try {
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        const userExist= await user.findOne({email});

        if (userExist) {
            return res.status(400).json({msg:"Email allready exist"});
        }
    
       const userCreated = await user.create({username, email, phone, password,});
        
        res.status(200).json({msg:userCreated,token: await userCreated.generateToken() });    
    } catch (error) {
        console.log("internal server error");
    }
}
module.exports={home,register}