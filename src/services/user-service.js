const {userRepositroy}=require("../repository/index");

class userService{

    constructor(){
        this.userRepositroy=new userRepositroy();
    }

    async create(data){
        try {
            const user=await this.userRepositroy.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async delete(userid){
        try {
            const response=await this.userRepositroy.delete(userid);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    
}

module.exports=userService;