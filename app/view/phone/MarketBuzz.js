(function() {

  Ext.define('Cv.view.phone.MarketBuzz', {
    extend: 'Cv.view.MarketBuzz',
    config: {
      id: 'cvPhoneMarketBuzz'
    },
    getPortletItems: function() {
      console.log('marketBuzz phone getPortletItems');
      return [
        {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [
            {
              xtype: 'TopStoriesPortlet',
              flex: 1,
              id: 'cvTopStoriesPortlet',
              title: 'Top Stories'
            }, {
              xtype: 'CmCarousel',
              flex: 1,
              id: 'cvCarousel',
              title: 'Citi Minute'
            }, {
              xtype: 'ResearchPortlet',
              flex: 1,
              id: 'cvResearchPortlet',
              title: 'Daily Research'
            }, {
              xtype: 'VideoPortlet',
              flex: 1,
              id: 'cvVideoPortlet',
              title: 'Citi Velocity Video'
            }
          ]
        }
      ];
    }
  });

}).call(this);
