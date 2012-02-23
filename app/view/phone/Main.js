(function() {

  Ext.define("Cv.view.phone.Main", {
    extend: 'Cv.view.Main',
    getSpecialItems: function() {
      return [
        {
          cls: 'searchIcon'
        }
      ];
    }
  });

}).call(this);
