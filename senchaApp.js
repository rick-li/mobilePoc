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
<<<<<<< HEAD
    controllers: ['Main', 'Page', 'Research', 'Video'],
    views: ['Main', 'Menu', 'Page', 'MarketBuzz', 'ResearchPortlet', 'VideoPortlet'],
    models: ['Research', 'Video'],
=======
    profiles: ['Phone', 'Tablet'],
    controllers: ['Research', 'Video'],
    views: ['Main', 'Menu', 'Page', 'ResearchPortlet'],
    models: ['Research'],
>>>>>>> 3455cce954c9f8e3f7efc2bd7cd0af67eeedd7d7
    launch: function() {
      console.log('launch');
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
