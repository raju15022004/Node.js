const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding<title></head>');
  res.write('<body><h1>Like / share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
  // process.exit();

});

const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
