(function() {

  Ext.define('Cv.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
      name: 'phone',
      controllers: ['Main', 'Page']
    },
    isActive: function() {
      return Ext.os.is.Phone;
    },
    launch: function() {
      console.log(Date.now() + ' Cv.profile.Phone launch');
      return this.callParent();
    }
  });

}).call(this);
