require('dotenv').config();

const {Sequelize}=require('sequelize');

const sequelize=new Sequelize(process.env.SCHEMA,process.env.USER,process.env.PASSWORD,{
    dialect:'postgres',
    port:5432,
    host:process.env.HOST,
    logging:false
});

module.exports=sequelize;