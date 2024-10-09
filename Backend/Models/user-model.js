const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');
userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});
userSchema.pre("save",async function (next) {
    const User=this;
    if(!User.isModified("password")){
        next();
    }
    try {
        const saltRound=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(User.password,saltRound); 
        User.password=hashPassword;
    } catch (error) {
        next(error);
    }
})
//json web token
userSchema.methods.generateToken=async function(){
    
};
//define the model or collection name
const user=new mongoose.model('User',userSchema);
module.exports=user;