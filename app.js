var express = require("express");
const { port } = require('./config');
var helmet = require('helmet');

var app = express();
app.use(helmet());


app.get("/", function(req, res) {
  res.send("Hello World!!");
});

app.listen(port, function() {
  console.log(`Server is running at ${port} port!`);
});
