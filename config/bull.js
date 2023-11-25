require('dotenv').config();
const {Queue}=require('bullmq');

const {REDIS_HOST,REDIS_PORT,REDIS_USER,REDIS_PASSWORD}=process.env;

const redisOptions={
    connection:{host:REDIS_HOST,port:REDIS_PORT},
    defaultJobOptions: {
        removeOnComplete: true,
      }
};
console.log(redisOptions);
const userQueue=new Queue('user',redisOptions);

module.exports={userQueue,redisOptions};