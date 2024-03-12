const {User,Role}=require("../models/index");

class userRepository{

    async create(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async delete(userId){
        try {
            await User.destroy({
                where:{
                    id:userId,
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

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const role = await Role.findOne({
                where:{
                    name:"ADMIN",
                }
            })
            const response= await user.hasRole(role);
            return response;
        } catch (error) {
            console.log("something went wrong at repository layer ");
            throw {error};
        }
    }

}

module.exports=userRepository;