(function() {

  Ext.define('Cv.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
      name: 'phone',
      controllers: ['Page'],
      views: ['MarketBuzz']
    },
    isActive: function() {
      return Ext.os.is.Phone;
    },
    launch: function() {
      console.log(Date.now() + ' Cv.profile.Phone launch');
      this.callParent();
      return Ext.create('Cv.view.Main', {
        height: 600
      });
    }
  });

}).call(this);
