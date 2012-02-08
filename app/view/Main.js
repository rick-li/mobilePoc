(function() {

  Ext.define("cv.view.Main", {
    extend: 'Ext.Panel',
    config: {
      id: 'viewport',
      fullscreen: true,
      layout: 'card'
    },
    initialize: function() {
      var cvMenu;
      console.log('main init');
      cvMenu = Ext.create('cv.view.Menu');
      this.setItems([
        {
          docked: 'top',
          xtype: 'toolbar',
          layout: 'hbox',
          title: 'CitiVelocity'
        }, {
          docked: 'top',
          items: [cvMenu]
        }
      ]);
      return this.callParent(arguments);
    }
  });

}).call(this);
