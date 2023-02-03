// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("$", function (err, files) {
//   if (err) {
//     console.log("Error is", err);
//   } else {
//     console.log("Result", files);
//   }
// });

// const EventEmitter = require("events");

// const Logger = require("./index");
// const logger = new Logger();
// //Register a listener
// logger.on("message logged", function (arg) {
//   console.log("alo alo", arg);
// });

// logger.log("hello");

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run request...");
  res.setHeader("content-Type", "tetx/html");
  res.write("<h1>Hello world</h1>");
  res.write("<h2>Hello Jason with Nodejs</h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console, log("Node js is runnign on local host 3000");
});
