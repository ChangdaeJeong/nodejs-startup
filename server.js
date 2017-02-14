var http = require('http');
var express = require('express');
var app = express();
var utils = require('./dist/util/utils');
var pugRead = require('./dist/util/pug-read')(__dirname,'/public/pug/');
//var db = require('./dist/util/pg-client').client;
var db;
var bparser = require('body-parser');
var mainRouter = require('./dist/router/main-router')(db);
function runServer(err){
  if(err)
    return utils.print(err);

  var server = http.createServer(app);
  
  app.use(require('helmet')());
  app.use(require('express-domain-middleware'));
  app.use(express.static(__dirname + '/public'));
  app.use(require('cookie-parser')());
  app.use(bparser.urlencoded({extended:true}));
  app.use(bparser.json());
  
  app.all('/*', function(req, res, next){
    next();
  }); 
  app.use(mainRouter);
  app.get('/*',function(req,res,next){
    return pugRead(res,'index', {});
  });
  server.listen(8888);
}

runServer();
