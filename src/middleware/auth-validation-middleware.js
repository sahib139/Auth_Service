const authUserValidator= (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:"something went wrong",
            err:"Email or password missing in the request",
        });
    }
    next();
}

const isAdminValidator = (req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            success:false,
            data:{},
            message:"something went wrong",
            err:"No id parameter is present in request body",
        });
    }
    next();
}

module.exports={
    authUserValidator,
    isAdminValidator,
}