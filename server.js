var express = require('express'),
    app = express(),
    fs = require('fs');

var clientaccesspolicy = fs.readFileSync(__dirname + '/public/clientaccesspolicy.xml', 'utf8');

app.configure(function () {
  app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 
  app.use('/public', express.static(__dirname + '/public'));
  app.set('views', __dirname + '/template');
});

app.get('/', function (req, res) {
    res.render('index.jade');
});
app.get('/blog', function (req, res) {
    res.redirect('http://blog.bjartwolf.com');
});
app.get('/clientaccesspolicy.xml', function (req, res) {
    res.send(clientaccesspolicy);
});
app.get('/pivot/*', function (req, res) {
    res.redirect('http://213.180.83.51/pivot' + req.url);
});
app.listen(process.env.port || 8000);

