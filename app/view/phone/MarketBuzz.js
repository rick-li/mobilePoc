(function() {

  Ext.define('Cv.view.phone.MarketBuzz', {
    extend: 'Cv.view.MarketBuzz',
    config: {
      id: 'cvPhoneMarketBuzz',
      scrollable: 'vertical'
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
              xtype: 'CitiMinute',
              id: 'citiMinute',
              title: 'Citi Minute',
              height: '300px'
            }, {
              xtype: 'TopStoriesPortlet',
              id: 'cvTopStoriesPortlet',
              title: 'Top Stories',
              height: '300px'
            }, {
              xtype: 'CommentaryPortlet',
              id: 'cvCommentaryPortlet',
              title: 'Daily Commentary',
              height: '300px'
            }, {
              xtype: 'ResearchPortlet',
              id: 'cvResearchPortlet',
              title: 'Daily Research',
              height: '300px'
            }, {
              xtype: 'VideoPortlet',
              id: 'cvVideoPortlet',
              title: 'Video 1',
              height: '300px'
            }
          ]
        }
      ];
    }
  });

}).call(this);
