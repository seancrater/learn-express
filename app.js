var $ = require('jquery'),
    express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/json', function(request, response) {
  var langs = ['CSS', 'HTML', 'JavaScript', 'PHP'];
  // This would be a great place to pull in data from a database/back-end script to create an API endpoint

  response.send(langs);
});

app.listen(3000);
