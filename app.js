
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var app = express();

app.use('/', express.static(__dirname));

app.get('/makers', function(req, res){
  res.send(['Audi', 'BMW', 'Benz']);
});

http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port 8080');
});

