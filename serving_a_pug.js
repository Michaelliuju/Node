var express = require('express');
var app = express();
var router = express.Router();

app.listen(3000,function(){
	console.log('its starting');
});

app.set('views', './public')

app.set('view engine', 'pug');

router.get('/public/:id', function (req, res) {
	res.render('index', { title: 'Express Practice', message: 'its my frist time'});
});

app.get('/*', router);
