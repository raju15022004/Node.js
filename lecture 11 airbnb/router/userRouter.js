const path = require('path');

const express=require('express');
const { register } = require('module');
const userRouter=express.Router();
// const hostRouter=express.hostRouter();



userRouter.get("/", (req,res,next)=>{
  console.log(registeredHomes);
  res.sendFile(path.join(__dirname,'../','views','home.html'));
});

module.exports=userRouter;
