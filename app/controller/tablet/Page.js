(function() {

  Ext.define('Cv.controller.tablet.Page', {
    extend: 'Cv.controller.Page',
    createMarketBuzz: function(pageId) {
      return Ext.create('Cv.view.tablet.MarketBuzz', {
        pageId: pageId
      });
    },
    launch: function() {
      console.log('launch tablet page controller');
      return this.callParent();
    }
  });

}).call(this);
