(function() {

  Ext.define('Cv.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
      name: 'tablet',
      controllers: ['Main', 'Page'],
      views: ['MarketBuzz']
    },
    isActive: function() {
      return Ext.os.is.Desktop || Ext.os.is.Tablet;
    },
    launch: function() {
      console.log(Date.now() + ' Cv.profile.Tablet launch');
      this.callParent();
      return Ext.create('Cv.view.Main');
    }
  });

}).call(this);
