var express = require('express');
var app = express();
var router = express.Router();

app.set('views', './public')

app.set('view engine', 'jade');

router.get('/public/:id', function (req, res) {
	
	var mytitle = 'Express Practice';
	var mymessage = 'its my frist time!';
	res.render('index', { title: mytitle, message: mymessage});
});

app.use('/', router);

var server = app.listen(3000,function(){
        var host = server.address().address;
	var port = server.address().port;
	console.log('its starting');
	console.log('Example app listening at http://%s:%s', host, port);
})

