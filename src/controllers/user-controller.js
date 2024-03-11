const {userService}=require("../services/index");

const UserService=new userService();

const create=async (req,res)=>{
    try {
        const user=await UserService.create(req.body);
        return res.status(201).json({
            data:user,
            success:true,
            message:"user created successfully",
            err:{},
        });
    } catch (error) {
        console.log("something went wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create the user",
            err:error,
        });
    }
};

const destroy=async (req,res)=>{
    try {
        const response=await UserService.delete(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"user deleted successfully",
            err:{},
        });
    } catch (error) {
        console.log("something went wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to delete the user",
            err:error,
        });
    }
};

const signIn = async (req,res)=>{
    try {
        const response=await UserService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:response,
            success:true,
            message:"user signin successfully",
            err:{},
        });
    } catch (error) {
        console.log("something went wrong at controller layer");
        return res.status(500).json({
            data:{},
            success:false,
            message:"invalid details",
            err:error,
        });
    }
}

module.exports={
    create,
    destroy,
    signIn,
}