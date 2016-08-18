var express = require('express');
var app = express();

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('its starting');
	console.log('Example app listening at http://%s:%s', host, port);

})

app.set('views', './public')

app.set('view engine', 'pug');

var router = express.Router();

router.get('/public/:id', function (req, res) {
	
	var mytitle = 'Express Practice';
	var mymessage = 'its my frist time!';
	res.render('index', { title: mytitle, message: mymessage});
});

app.use('/', router);
