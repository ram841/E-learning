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
    
       const userCreated = await user.create({
        username, 
        email,
        phone,
        password,});
        
        res.status(200).json(
            {
                msg:userCreated,
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString() 
            });    
    } catch (error) {
        console.log(error);
    }
}
// ---------------------------------------------------------------------------------------------------------------------------------------
// user login logic
  const login = async (req,res) =>{
    try {
        const {email,password}=req.body
        const userExist=await user.findOne({email})

        if(!userExist){
            return res.status(400).json({msg:"Invalid Credincials"})
        }

        // const validatePassword=await bcrypt.compare(password , userExist.password);
        const validatePassword=await userExist.comparePassword(password);
        
        if(validatePassword){
            res.status(201).json(
                {
                    msg:"Login Successfull",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString() 
                });
        }
        else{
            res.status(401).json({msg:"invalid Email or Password"})
        }
    } catch (error) {
        return res.status(500).json("internal server error"); 
    }
  }
 

module.exports={home,register,login}