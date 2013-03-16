var express = require('express'),
    app = express();


app.configure(function () {
  app.use('/public', express.static(__dirname + '/public'));
  app.set('views', __dirname + '/template');
});

app.get('/', function (req, res) {
    res.render('index.jade');
});
app.listen(process.env.port || 8000);
