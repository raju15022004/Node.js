const http = require('http');
const express=require('express');

const userRouter=require("./router/userRouter")


const app=express();

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})

app.use(express.urlencoded());

app.use(userRouter);

app.get("/", (req,res,next)=>{
  res.send(`
    <h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>
    `);
})


app.get("/host/ add-home", (req,res,next)=>{
  res.send(`
    <h1> Register your home here: </h1>
    <form action="/add-home" method="POST">
    <input type="text" name="houseNmae"
    placeholder="Enter the name of your house"/>
    <input type="submit"/>
    </form>
    `);
})

app.get("/host/ add-home", (req,res,next)=>{
  console.log(req.body);
  res.send(`
    <h1> Register your home here: </h1>
    <a href="/">Go to Home</a>
    `);
})

const server=http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
