var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', process.cwd() + '/views');
app.engine('.html', require('ejs').__express);
var fileWorker = require('./fileWorker');


var getHtml = function(req, res) {
	res.render("index.html");
};

app.get('/home', function(req, res) {
	var name = req.params.name;
	res.render("Home.html");
});
app.get('/outlets', function(req, res) {
	var name = req.params.name;
	res.render("outlets.html");
});
app.get('/order', function(req, res) {
	var name = req.params.name;
	res.render("OrderOnline.html");
});

app.get('/', getHtml);
app.get('/getData',fileWorker.getData);
app.post('/updateForm',fileWorker.updateForm);


var server = app.listen(2121, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at on http://%s:%s', host, port);

});