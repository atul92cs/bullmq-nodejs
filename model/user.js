const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
module.exports=User;