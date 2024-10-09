const express =require("express");
const router =express.Router();
const controlers=require("../Controlers/auth-controler");
router.route("/").get(controlers.home);
router.route("/register").post(controlers.register);
module.exports=router;