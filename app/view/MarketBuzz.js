(function() {

  Ext.define('Cv.view.MarketBuzz', {
    extend: 'Cv.view.Page',
    config: {
      layout: {
        type: 'hbox'
      }
    },
    initialize: function() {
      console.log('MarketBuzz initialize');
      this.setItems(this.getPortletItems());
      return this.callParent();
    },
    getPortletItems: function() {
      return {
        xtype: 'panel',
        html: 'MarketBuzz Page',
        flex: flex,
        1: 1
      };
    }
  });

}).call(this);
