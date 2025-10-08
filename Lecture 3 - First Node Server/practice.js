const http = require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  res.write(`
<html lang="en">
<head>
  <title>myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>

</body>
</html>

  `);
  res.end();

});

server.listen(3001,()=>{
  console.log('Server running on address http://localhost:3001');
});
