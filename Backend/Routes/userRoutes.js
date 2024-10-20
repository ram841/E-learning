const express =require("express");
const router =express.Router();
const controler1=require("../Controlers/userControlers");
router.route("/home").get(controler1.home);
router.route("/register").post(controler1.register);
router.route("/login").post(controler1.login);
module.exports=router;