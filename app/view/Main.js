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
          items: this.getSubItems()
        }, {
          docked: 'top',
          items: [Ext.create('Cv.view.Menu')]
        }
      ];
    },
    getSubItems: function() {
      var subItems;
      subItems = this.getSpecialItems();
      subItems.push({
        xtype: 'image',
        centered: true,
        src: 'resources/images/CitiV_Logo_Top.png',
        minWidth: 233,
        minHeight: 30
      });
      return subItems;
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
