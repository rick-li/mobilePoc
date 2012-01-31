(function() {

  Ext.ns('cv', 'cv.views', 'cv.controllers');

  Ext.setup({
    statusBarStyle: 'black',
    onReady: function() {
      return console.log('sencha ready');
    }
  });

  Ext.regApplication({
    name: 'cv',
    defaultTarget: 'viewport',
    launch: function() {
      console.log('launch');
      this.viewport = new cv.Viewport({
        application: this
      });
      return Ext.dispatch({
        controller: 'page',
        action: 'index',
        id: 'MarketBuzz',
        historyUrl: 'page/index/MarketBuzz'
      });
    }
  });

  cv.Viewport = Ext.extend(Ext.Panel, {
    id: 'viewport',
    fullscreen: true,
    layout: 'card',
    initComponent: function() {
      Ext.apply(this, {
        dockedItems: [
          {
            dock: 'top',
            xtype: 'toolbar',
            layout: 'hbox',
            title: 'CitiVelocity'
          }, {
            dock: 'top',
            xtype: 'cvMenu'
          }
        ]
      });
      return cv.Viewport.superclass.initComponent.apply(this, arguments);
    }
  });

  cv.util = {
    getCurrentHashUrl: function() {
      return location.href.substring(location.href.indexOf('#') + 1);
    }
  };

}).call(this);
