const mongoose=require("mongoose");
testSchema=new mongoose.Schema({
    subject:{
        type:String,
        require:true, 
    },
    question:{
        type:String,
        require:true,
    },
    option1:{
        type:String,
        require:true,
        
    },
    option2:{
        type:String,
        require:true,
        
    },
    option3:{
        type:String,
        require:true,
        
    },
    option4:{
        type:String,
        require:true,
        
    },
    answer:{
        type:String,
        require:true,
    },    
});
const test=new mongoose.model('Test',testSchema);
module.exports=test;