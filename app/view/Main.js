(function() {

  Ext.define("Cv.view.Main", {
    extend: 'Ext.Panel',
    config: {
      id: 'viewport',
      fullscreen: true,
      layout: 'card',
      items: []
    },
    /*
        okBtnHandler: ->
            cvMarketBuzz = Ext.getCmp('cvMarketBuzz')
            if cvMarketBuzz
                cvMarketBuzz.fireEvent('doOrientationChange', cvMarketBuzz)
    */
    initialize: function() {
      var cvMenu;
      console.log('main init');
      cvMenu = Ext.create('Cv.view.Menu');
      this.setItems([
        {
          docked: 'top',
          xtype: 'toolbar',
          html: '<div class="logo"><img style="margin:10px;" src="resources/images/CitiV_Logo_Top.png"></div>',
          items: [
            {
              xtype: 'searchfield',
              name: 'searchfield',
              placeholder: 'Search...',
              cls: 'search'
            }, {
              ui: 'back',
              text: 'back'
            }
          ]
        }, {
          docked: 'top',
          items: [cvMenu]
        }
      ]);
      return this.callParent(arguments);
    }
  });

}).call(this);
