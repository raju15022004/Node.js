const path = require('path');

const express=require('express');
// const { register } = require('module');
const userRouter=express.Router();
//  const hostRouter=express.hostRouter();

const {registeredHomes}=require('./hostRouter');

userRouter.get("/", (req,res,next)=>{
  console.log(registeredHomes);
  res.render('home',{registeredHomes: registeredHomes});
});

module.exports=userRouter;
