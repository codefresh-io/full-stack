var express = require('express');

// Constants
var PORT = 9000;

// App
var app = express();
app.get('/', function (req, res) {
	console.log('Got Request!!!');
  	res.send('Hello world we dont need npm!!! bug 401 doesn\'t happen!! wee!!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
