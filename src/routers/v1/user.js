const express=require("express");
const router=express.Router();

const {userController}=require("../../controllers/index");

router.post("/signup",userController.create);
router.delete("/user/:id",userController.destroy);

module.exports=router;