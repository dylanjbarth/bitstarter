var express = require('express');
var fs = require('fs'); 

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
    var outStr = fs.readFile('index.html', 'utf8');
    var buf = new Buffer(outStr);
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


