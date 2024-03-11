const {User}=require("../models/index");

class userRepositroy{

    async create(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async delete(userid){
        try {
            await User.destroy({
                where:{
                    id:userid,
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async getById(userId){
        try {
            const user=await User.findByPk(userId,{
                attributes:['email','id'],
            });
            return user;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async getByEmail(userEmail){
        try {
            const user=await User.findOne({
                where:{
                    email:userEmail,
                },
            });
            return user;
        } catch (error) {
            console.log("something went wrong at repository layer ");
            throw {error};
        }
    }

}

module.exports=userRepositroy;