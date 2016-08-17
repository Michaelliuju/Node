var express = require('express');
var app = express();

app.listen(3000,function(){
	console.log('its starting');
});

app.set('views', './public')

app.set('view engine', 'pug');

//app.get('/public/:id', function(req,res){
//	res.render('index',{title:'Express Practice',message:'this is my frist time'});
//});

app.get('/public/:id', function (req, res) {
  res.render('index', { title: 'Express Practice', message: 'its my frist time'});
  });
