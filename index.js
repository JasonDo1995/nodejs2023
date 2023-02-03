const EventEmitter = require("events");

// console.log(__dirname);
// console.log(__filename);
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log = (message) => {
    console.log(message);
    //Raise an event

    this.emit("message logged", { id: 1, url: "http://" });
  };
}

module.exports = Logger;
// module.exports.endpoint = url;
// exports.log = log;
