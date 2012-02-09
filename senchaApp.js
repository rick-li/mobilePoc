(function() {

  Ext.ns('cv', 'cv.views', 'cv.controllers');

  /*
  Ext.setup
      statusBarStyle: 'black'
      onReady: ->
          console.log('sencha ready')
  */

  Ext.Loader.setConfig({
    enabled: false
  });

  cv.app = Ext.application({
    name: 'cv',
    controllers: ['Page', 'Research'],
    views: ['Main', 'Menu', 'Page', 'ResearchPortlet'],
    models: ['Research'],
    launch: function() {
      console.log('launch');
      Ext.create('cv.view.Main');
      if (location.href.indexOf('#') === -1) {
        console.log('redirect to default page');
        return this.redirectTo('page/MarketBuzz');
      }
    }
  });

  cv.util = {
    getCurrentHashUrl: function() {
      return location.href.substring(location.href.indexOf('#') + 1);
    }
  };

}).call(this);
