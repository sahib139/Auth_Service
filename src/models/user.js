'use strict';
const {
  Model
} = require('sequelize');

const bcrypt=require("bcrypt");
const {SALT}=require("../config/server_config");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role,{
        through:'User_Roles',
      });
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true,
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[6,100],
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
    const hash=bcrypt.hashSync(user.password, SALT);
    user.password=hash;
  });

  return User;
};