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

  Ext.application({
    name: 'cv',
    controllers: ['Page'],
    views: ['Main', 'Menu', 'Page'],
    launch: function() {
      console.log('launch');
      return Ext.create('cv.view.Main');
      /*
              @viewport = new cv.Viewport(
                  application: this
              )
              
              #render default page
              #hardcode to MarketBuzz 
              Ext.dispatch
                  controller: 'page'
                  action: 'index'
                  id: 'MarketBuzz'
                  historyUrl: 'page/index/MarketBuzz'
      */
    }
  });

  cv.util = {
    getCurrentHashUrl: function() {
      return location.href.substring(location.href.indexOf('#') + 1);
    }
  };

}).call(this);
