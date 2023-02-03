const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run request...");
  res.setHeader("content-Type", "text/html");
  res.write("<h1>Hello world</h1>");
  res.write("<h2>Hello Jason with Nodejs</h2>");
  res.end();
});

server.listen(3500, "localhost", () => {
  console.log("Node js is runing on local host 3500");
});
