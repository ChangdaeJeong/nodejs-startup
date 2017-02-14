var pg = require('pg');
module.exports = (function(){
  var infos = 'postgres://postgres:postgres@localhost:5432/dbs';
  var pgc = new pg.Client(infos);
  return {
    client : pgc
  };
}());
