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
    profiles: ['Phone', 'Tablet'],
    controllers: ['Research', 'Video', 'Commentary', 'TopStories', 'CitiMinute'],
    views: ['Menu', 'Page', 'ResearchPortlet', 'CitiMinute', 'TopStoriesPortlet', 'CommentaryPortlet'],
    models: ['Research'],
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
