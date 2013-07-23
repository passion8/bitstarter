var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var data =  fs.readFileSync('index.html');
  var str       =  data.toString('utf-8');
  response.send(str);
});

var port = process.env.PORT || 8080 ;
app.listen(port, function() {
  console.log("Listening on " + port);
});
