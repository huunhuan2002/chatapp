var express = require('express');
var ws = require("nodejs-websocket");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
  }).listen(8001);

  res.send("hello all");
});

module.exports = router;
