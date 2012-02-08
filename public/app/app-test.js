(function() {
  var list, temp;

  list = ['peter', 'mary'];

  temp = _.template('<% _.each(list, function(obj){%>\n    <li>obj<li>\n<%});%>\n');

  console.log(temp({
    'list': list
  }));

}).call(this);
