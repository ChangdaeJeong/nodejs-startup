var pug = require('pug');
module.exports = function(root, dir){
  return function pugRead(res, p, varlist){
    try{
      var fn = pug.compileFile(root+dir+p+'.pug',{
        basedir:__dirname
      });
    
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(fn(varlist));
    
    }
    catch(e){
     console.error(e);
     res.redirect('/404');
    }
  };
};
                                                                               
           
