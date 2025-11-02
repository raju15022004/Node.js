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

const server=http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
