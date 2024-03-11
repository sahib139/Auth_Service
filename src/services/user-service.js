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

    async signIn(email,password){
        try {
            const user=await this.userRepositroy.getByEmail(email);

            const passwordMatching=this.checkPassword(password,user.password);
            if(!passwordMatching){
                console.log("Incorrect Password");
                throw {error:"Incorrect Password"};
            }
            
            const token = this.createToken({id:user.id,email:user.email});
            return token;
        } catch (error) {
            console.log("Something went wrong at signIn service");
            throw {error};
        }
    }

    async isAuthenticate(token){
        try {
            const response =this.verifyToken(token);
            if(!response){
                throw {error: "Invalid token"};
            }
            console.log(response);
            const user=await this.userRepositroy.getById(response.id);
            if(!user){
                throw {error: "No user exist with this email"};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong at isAuthentication service");
            throw {error};
        }
    }   

    createToken(user){
        try {
            const response = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
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
            console.log("Something went wrong at verifying token service "+error);
            return false;
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