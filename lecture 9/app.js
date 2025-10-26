const http = require('http');
const express=require('express');
const requestHandler = require('./user'); // Import your custom handler


// ✅ Correctly pass the handler function to createServer
// const server = http.createServer(requestHandler);

const app=express();

app.use((req,res,next)=>{
  console.log("Come in first middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Come in second middleware",req.url,req.method);
  res.send("<p>Welcome to complete Coding Nodejs series</p>");
});

const server=http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
