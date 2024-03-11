const express=require("express");
const router=express.Router();

const {authValidateMiddleware}=require("../../middleware/index");
const {userController}=require("../../controllers/index");

router.post(
    "/signup",
    authValidateMiddleware.authUserValidator,
    userController.create
);
router.post(
    "/signin",
    authValidateMiddleware.authUserValidator,
    userController.signIn
);
router.post(
    "/isAuthenticate",
    userController.isAuthenticate
);

router.delete("/user/:id",userController.destroy);

module.exports=router;