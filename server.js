const express = require('express');
const path = require('path');
const http = require('http');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser');

const publicPath = path.resolve(__dirname, 'public');

app.use(bodyParser.json());

app.use(fileUpload());

app.use(express.static(publicPath));

app.get('/api/download/:file', function (req, res) {
  var file = __dirname + `/download/${req.params.file}`;
  res.download(file); // Set disposition and send it.
});

app.use(function (request, response) {
  response.statusCode = 404;
  response.end('404!');
});

http.createServer(app).listen(3000);

module.exports = app;
