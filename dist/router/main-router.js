var pugRead = require('../util/pug-read')(__dirname, '/../../public/pug/');
var express = require('express');

// router

module.exports = function(db){
  var router = express.Router();
  var indexRouter = require('./index-router')(db);
  router.all('/', function(req,res,next){
    next();
  });
  router.get('/', indexRouter.index);
  return router;
}
