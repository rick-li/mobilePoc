(function() {

  Ext.define('Cv.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
      name: 'tablet',
      controllers: ['Main', 'Page']
    },
    isActive: function() {
      return Ext.os.is.Desktop || Ext.os.is.Tablet;
    },
    launch: function() {
      console.log(Date.now() + ' Cv.profile.Tablet launch');
      return this.callParent();
    }
  });

}).call(this);
