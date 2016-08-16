var express = require('express');
var app = express();

app.listen(3000,function(){
	console.log('its starting');
});

//app.git('/v1/test-api',function(req, res){
//	res.json({ret:1000});
//});

app.get('/v1/:id', function(req, res){
	res.json({ret:1000});
});


