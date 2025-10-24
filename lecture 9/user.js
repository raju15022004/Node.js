const http = require('http');

const server = http.createServer((req,res)=>{
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Enter Your Details:</h1>');
res.write('<from action="/submit-details" method="POST">');
res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
res.write('<label for="male">male</label>')
res.write('<input type="radio" id="male" name="gender" value="male" />')
res.write('<lable for="female">Female</lable>')
res.write('<input type="radio" id="female" name="gender" value="female" />')
res.write('<input type="submit" value="Submit">');
res.write('</form>');

res.write('</body>');
res.write('</html>');
return res.end();

});

const PORT=300;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
