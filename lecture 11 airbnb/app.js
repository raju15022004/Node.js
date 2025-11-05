const path=require('path');

const http = require('http');
const express=require('express');

const userRouter=require("./router/userRouter")
const hostRouter=require("./router/hostRouter")
const rootDir=require("./utils/pathutil");


const app=express();


app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.sendFile(path.join(rootDir,'../','views','404.html'));
})

const server=http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
