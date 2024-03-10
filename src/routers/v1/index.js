const express=require("express");
const router =express.Router();

const userroutes=require("./user");

router.use(userroutes);

module.exports=router;