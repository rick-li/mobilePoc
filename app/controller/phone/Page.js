(function() {

  Ext.define('Cv.controller.phone.Page', {
    extend: 'Cv.controller.Page',
    createMarketBuzz: function(pageId) {
      return Ext.create('Cv.view.phone.MarketBuzz', {
        pageId: pageId
      });
    },
    launch: function() {
      console.log('launch phone page controller');
      return this.callParent();
    }
  });

}).call(this);
