// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res)=>{
// // console.log(req.url,req.method);
// // if(req.url === '/'){
// res.write('<html>');
// res.write('<head><title>Complete Coding</title></head>');
// res.write('<body><h1>Enter Your Details:</h1>');
// res.write('<from action="/submit-details" method="POST">');
// res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
// res.write('<label for="male">male</label>')
// res.write('<input type="radio" id="male" name="gender" value="male" />')
// res.write('<lable for="female">Female</lable>')
// res.write('<input type="radio" id="female" name="gender" value="female" />')
// res.write('<input type="submit" value="Submit">');
// res.write('</form>');

// res.write('</body>');
// res.write('</html>');
// return res.end();

// // }
// // else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){

// //   req.on('data',chunk => {
// //     console.log(chunk);
// //   });
// //   fs.writeFileSync('user.text','Raju');
// //    res.statusCode=302;
// //    res.setHeader('Location','/');
// //    return res.end();
// // }


// req.on("end",()=>{
//   const parseBody=Buffer.concat(body).toString();
//   console.log(parseBody);

//   const params=new URLSearchParams(parseBody);
//   const jsonObject={};
//   for(const[key,value] of params.entries()){
//     jsonObject[key]=value;
//   }
//   console.log(jsonObject);
// });


// });

// const PORT=3001;
// server.listen(PORT,()=>{
//   console.log(`Server running on address http://localhost:${PORT}`);
// });

////////////////////////////////////////////////////////////


// const http = require('http');

// const server = http.createServer((req,res)=>{

// req.on("end",()=>{
//   const parseBody=Buffer.concat(body).toString();
//   console.log(parseBody);

//   const params=new URLSearchParams(parseBody);
//   const jsonObject={};
//   for(const[key,value] of params.entries()){
//     jsonObject[key]=value;
//   }
//   console.log(jsonObject);
// });
// fs.writeFileSync("User-details.txt","Raju");
// res.setHeader("Location","/");
// res.statusCode=302;
// return res.end();


// });

// const PORT=3001;
// server.listen(PORT,()=>{
//   console.log(`Server running on address http://localhost:${PORT}`);
// });


const http = require('http');
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

const PORT=3001;
server.listen(PORT,()=>{

  console.log(`Server running on address http://localhost:${PORT}`);
})
