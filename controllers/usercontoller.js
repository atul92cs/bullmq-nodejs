const {userQueue,redisOptions}=require('../config/bull');
const {User}=require('../model');
const express=require('express');
const {Queue,Worker,Job}=require('bullmq');
const router=express.Router();

const addUser=async(req,res)=>{
    try
    {
        let {email,name}=req.body;
        let user=JSON.stringify({name,email});
        
        let result=await processUseremail(user,{removeOnComplete:true});
        res.send(result);
    }
    catch(err)
    {
        res.send(err);
    }
}



processUseremail=async(user)=>{
    let result=await userQueue.add(user);
    return result;
}
let userWorker=new Worker("user",async(job)=>{
    try
    {
        let {name:data}=job;
        let {name,email}=JSON.parse(data);
        let result= await User.create({name:name,email:email});
        
        return result;
    }
    catch(err)
    {
        
        return err;
    }
},redisOptions);
userWorker.on("completed",async(job)=>{
        
        return job.returnvalue
});
userWorker.on("failed",(job)=>{
    return  `user ${job.id} failed`;
});

module.exports=addUser;