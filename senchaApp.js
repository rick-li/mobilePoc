(function() {

  Ext.ns('Cv', 'Cv.views', 'Cv.controllers');

  /*
  Ext.setup
      statusBarStyle: 'black'
      onReady: ->
          console.log('sencha ready')
  */

  Ext.Loader.setConfig({
    enabled: false
  });

  Cv.app = Ext.application({
    name: 'Cv',
    controllers: ['Main', 'Page', 'Research', 'Video'],
    views: ['Main', 'Menu', 'Page', 'MarketBuzz', 'ResearchPortlet', 'VideoPortlet'],
    models: ['Research', 'Video'],
    launch: function() {
      console.log('launch');
      Ext.create('Cv.view.Main');
      if (location.href.indexOf('#') === -1) {
        console.log('redirect to default page');
        return this.redirectTo('page/MarketBuzz');
      }
    }
  });

  Cv.util = {
    getCurrentHashUrl: function() {
      return location.href.substring(location.href.indexOf('#') + 1);
    },
    getOrientation: function() {
      if (Ext.Viewport.getWindowHeight() >= Ext.Viewport.getWindowWidth()) {
        return Ext.Viewport.PORTRAIT;
      }
      return Ext.Viewport.LANDSCAPE;
    }
  };

}).call(this);
