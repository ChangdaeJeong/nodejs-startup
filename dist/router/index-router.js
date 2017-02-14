var pugRead = require('../util/pug-read')(__dirname, '/../../public/pug/');
var express = require('express');

module.exports = function(db){
  var index = function(req, res){
    return pugRead(res, 'index', {});
  };
  return {
    index : index
  };
};
