process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var serve = express();
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 4000));
serve.listen(serve.get('port'), function () {
  console.log('Node app of VMPRO is running at localhost:' + serve.get('port'));
  console.log('Mode: ', process.env.NODE_ENV);
});
