var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.json('Helloworld!');
});


app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});

app.post('/', function (req,res){
	res.send('Got a post request');
});

app.put('/user',function(req,res){
	res.send('Got a put request at /user');
});

app.delete('/user',function(req, res){
	res.send('Got a DELETE request at /user');
});
