const User=require('./user');
const sequelize=require('../config/database')
module.exports={
    User
};


sequelize.sync({alter:true}).then((result)=>{
    
    console.log('table synced');
}).catch(err=>{
    console.log('error-->',err);
});