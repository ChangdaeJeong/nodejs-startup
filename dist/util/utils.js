module.exports = (function(){
  function print(err){
    return console.error(err);
  }
  return {
    print : print
  };
}());
