(function() {
  var H;

  H = (function() {

    function H() {}

    return H;

  })();

  console.log('hello', {
    doSth: function(x) {}
  });

  console("hello " + x);

}).call(this);
