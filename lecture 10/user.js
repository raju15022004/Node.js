// user.js
const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/' && req.method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/submit-details' && req.method === 'POST') {
    const body = [];

    req.on('data', chunk => body.push(chunk));

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log('Form Data:', parsedBody);
      fs.writeFileSync('details.txt', parsedBody);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html>');
      res.write('<head><title>Submitted</title></head>');
      res.write('<body><h1>Details saved successfully!</h1>');
      res.write('<a href="/">Go Back</a>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }
};

module.exports = requestHandler;
