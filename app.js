var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Server is running');
});

app.listen(3000);
