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
          html: '<div class="logo"><img style="margin:10px;" src="resources/images/CitiV_Logo_Top.png"></div>',
          items: this.getSpecialItems()
        }, {
          docked: 'top',
          items: [Ext.create('Cv.view.Menu')]
        }
      ];
    },
    getSpecialItems: function() {
      return [];
    },
    initialize: function() {
      console.log('main init');
      this.setItems(this.getTitleItems());
      return this.callParent();
    }
  });

}).call(this);
