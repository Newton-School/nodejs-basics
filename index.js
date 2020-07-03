const http = require("http");
const fs = require("fs");

const reqListener = (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write(`
      <html>
        <head><title>Learn Nodejs</title></head>

        <body>
          <h1>Hello, Node!</h1>

          <form action="/message" method="POST">
            <input type="text" placeholder="Add your message" name="message" />
          </form>
        </body>
      </html>
    `);

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunkOfData) => {
      body.push(chunkOfData);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          res.send(err);
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");

        return res.end();
      });
    });
  }

  res.write(`
    <html>
      <head><title>Learn Nodejs</title></head>

      <body>
        <h1>Hello, Node!</h1>

        <p>404: Not Found</p>
      </body>
    </html>
  `);

  return res.end();
};

const server = http.createServer(reqListener);

server.listen(3000);
