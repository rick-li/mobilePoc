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
    getTitleItems: function() {
      return [
        {
          docked: 'top',
          xtype: 'toolbar',
          minHeight: 22,
          items: this.getSubItems()
        }, {
          docked: 'top',
          items: [Ext.create('Cv.view.Menu')]
        }
      ];
    },
    getSubItems: function() {
      return [];
    },
    initialize: function() {
      console.log('main init');
      this.setItems(this.getTitleItems());
      return this.callParent();
    }
  });

}).call(this);
