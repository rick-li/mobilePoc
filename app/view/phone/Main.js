(function() {

  Ext.define("Cv.view.phone.Main", {
    extend: 'Cv.view.Main',
    initialize: function() {
      console.log('main phone init');
      return this.callParent();
    },
    getSpecialItems: function() {
      var isShow, overlay;
      overlay = this.add([
        {
          xtype: 'searchfield',
          name: 'searchfield',
          placeholder: 'Search...',
          docked: 'bottom',
          modal: true,
          hidden: true
        }
      ]);
      isShow = false;
      return [
        {
          xtype: 'button',
          cls: 'phoneSearchIcon',
          docked: 'right',
          listeners: {
            tap: function(button) {
              console.log('tap main');
              console.log(overlay);
              return console.log(isShow);
            }
          }
        }
      ];
    }
  });

}).call(this);
