(function() {

  Ext.define('Cv.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
      name: 'phone',
      controllers: ['Page'],
      views: ['Main', 'MarketBuzz']
    },
    isActive: function() {
      return Ext.os.is.Phone || Ext.os.is.Desktop;
    },
    launch: function() {
      console.log(Date.now() + ' Cv.profile.Phone launch');
      this.callParent();
      return Ext.create('Cv.view.phone.Main', {
        height: 600
      });
    }
  });

}).call(this);
