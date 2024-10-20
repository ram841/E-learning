const express =require("express");
const router =express.Router();
const controler2=require("../Controlers/adminControlers");
router.route("/addtest").post(controler2.addTest);
module.exports=router;