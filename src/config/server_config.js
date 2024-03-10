const dotenv=require("dotenv");
const bcrypt=require("bcrypt");

dotenv.config();

const saltRounds = 10;

module.exports={
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(saltRounds),
}
