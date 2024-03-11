const {userRepositroy}=require("../repository/index");
const {JWT_KEY} = require("../config/server_config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

    createToken(user){
        try {
            const response = jwt.sign(user,JWT_KEY,{expiresIn:10});
            return response;
        } catch (error) {
            console.log("Something went wrong at creation token service");
            throw {error};
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong at verifing token service ");
            return error;
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("something went wrong at checking password service");
            throw {error};
        }
    }
    
}

module.exports=userService;