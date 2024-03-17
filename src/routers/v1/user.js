const express=require("express");
const router=express.Router();

const {authMiddleware}=require("../../middleware/index");
const {userController}=require("../../controllers/index");

router.post(
    "/signUp",
    authMiddleware.authUserValidator,
    userController.create
);
router.post(
    "/signIn",
    authMiddleware.authUserValidator,
    userController.signIn
);
router.post(
    "/isAuthenticate",
    userController.isAuthenticate
);

router.get(
    "/isAdmin",
    authMiddleware.isAdminValidator,
    userController.isAdmin,
);

router.delete("/user/:id",userController.destroy);

module.exports=router;