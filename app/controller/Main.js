(function() {

  Ext.define('cv.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
      id: 'cvControllerMain'
    },
    init: function() {
      console.log('init main controller');
      this.callParent();
      return Ext.Viewport.on('orientationchange', this.onOrientationChange);
    },
    onOrientationChange: function(viewport, orientation, width, height) {
      var cvMarketBuzz;
      console.log('Orientation Change: ' + orientation + ";width:" + width + ";height:" + height);
      cvMarketBuzz = Ext.getCmp('cvMarketBuzz');
      if (cvMarketBuzz) {
        return cvMarketBuzz.fireEvent('doOrientationChange', cvMarketBuzz);
      }
    }
  });

}).call(this);
