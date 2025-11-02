const http = require('http');
const express=require('express');

const userRouter=require("./router/userRouter")
const hostRouter=require("./router/hostRouter")


const app=express();


app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

const server=http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
