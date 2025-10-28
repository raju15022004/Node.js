const http = require('http');
const express=require('express');
const requestHandler = require('./user'); // Import your custom handler
// const express = require('body-parser');
const bodyParser = require('body-parser');


// ✅ Correctly pass the handler function to createServer
// const server = http.createServer(requestHandler);

const app=express();

app.use((req,res,next)=>{
  console.log("Come in first middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Come in third middleware",req.url,req.method);
  res.send("<p>Welcome to complete Coding Nodejs series</p>");
});

app.get('/details',(req,res,next)=>{
  console.log("hello world");
  res.send(`
    <h1>Enter your Details:</h1>
    <form> action="text" name="username" placeholder="Enter your name"><br>
    <br><input type="submit" value="Submit">
    </form>
    `)
});

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for Post",req.url,req.method,req.body);
  next()
})


app.use(bodyParser.urlencoded());

// app.post('/submit-details',(req,res,next)=>{
//   console.log(req.url,req.method,req.body);
//   res.redirect('/');
// });


app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for Post",req.url,req.method,req.body);
  res.send(`<h1>We will contact you shortly</h1>`);
})

 const server=http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
