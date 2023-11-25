const express=require('express');
const port=4000;
const app=express();
const addUser=require('./controllers/usercontoller');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    addUser(req,res);
});
app.listen(port,()=>{
    console.log('app started')
});