var restify = require('restify');
var cors = require('cors');
var app = restify.createServer({
    name: 'CORSSampleRestify'
});
var PORT = 8181;

app.use(cors());

app.get('/cors', function (request, response) {
  response.json({
    'message': 'Welcome! CORS! in restify!!!!'
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
