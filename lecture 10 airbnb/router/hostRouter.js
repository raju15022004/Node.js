const express=require('express');
const hostRouter=express.Router();



// app.get("/", (req,res,next)=>{
//   res.send(`
//     <h1> Welcome to airbnb </h1>
//     <a href="/add-home">Add Home</a>
//     `);
// })


hostRouter.get("/host/ add-home", (req,res,next)=>{
  res.send(`
    <h1> Register your home here sucessly: </h1>
    <form action="/add-home" method="POST">
    <input type="text" name="houseNmae"
    placeholder="Enter the name of your house"/>
    <input type="submit"/>
    </form>
    `);
})

hostRouter.post("/host/ add-home", (req,res,next)=>{
  console.log(req.body);
  res.send(`
    <h1> Register your home here: </h1>
    <a href="/">Go to Home</a>
    `);
})


module.exports=hostRouter;
