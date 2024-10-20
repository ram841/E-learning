require('dotenv').config();
const express =require("express");
const app=express();
const router=require("./Routes/auth-router");
const connectDb=require("./utils/db")

app.use(express.json());
app.use("/",router);

const port=5000;


connectDb().then(()=>{
app.listen(port,()=>{
    console.log(`server is listen at port :${port}`)
});
});