const fs = require("fs");
const http = require("http");

const requestListener = (req, res) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${err}`);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const PORT = 4000 || process.env.PORT;
const server = http.createServer(requestListener);
server.listen(PORT);
