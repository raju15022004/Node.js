const http = require('http');

const server = http.createServer((req,res)=>{

  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');

  if(req.url === '/'){
    res.write('<h1>Welcome to Home page</h1>');
    res.end();
  }
  else if(req.url.toLowerCase() === '/products'){
    res.write('<h1>Product</h1>');
    res.end();
  }

  res.write('<body><h1> Like / Share / Subscribe<h1></body>');
  res.write('</html>');
  res.end();
  // console.log(req.url,req.method,req.headers);

});

const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
