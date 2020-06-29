const http = require("http");

const reqListener = (req, res) => {
  console.log(req.url, req.method, req.headers);

  res.write("Hello, node!");
  res.end();
};

const server = http.createServer(reqListener);

server.listen(3000);
