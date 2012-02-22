(function() {

  Ext.define("Cv.view.phone.Main", {
    extend: 'Cv.view.Main',
    getSpecialItems: function() {
      return [
        {
          xtype: 'searchfield',
          name: 'searchfield',
          placeholder: 'Search...',
          docked: 'right'
        }
      ];
    }
  });

}).call(this);
