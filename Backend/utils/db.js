const mongoose=require("mongoose");
uri=process.env.MONGODB_URI;

// mongoose.connect(uri);
const connectDb=async ()=>{
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (error) {
       console.error("Database connection failed");
       process.exit(0); 
    }
}
module.exports=connectDb;