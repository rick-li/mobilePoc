Ext.define('Cv.view.phone.MarketBuzz',
    extend: 'Cv.view.MarketBuzz'
    config:
        id: 'cvPhoneMarketBuzz'
        scrollable: 'vertical'
    getPortletItems: ->
        console.log 'marketBuzz phone getPortletItems'
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    {xtype:'CitiMinute', id: 'citiMinute', title: 'A Citi Minute',height: '300px'}
                    {xtype:'TopStoriesPortlet', id: 'cvTopStoriesPortlet', title: 'Top Stories',height: '300px'}
                    {xtype:'CommentaryPortlet', id: 'cvCommentaryPortlet', title: 'Daily Commentary',height: '300px'}
                    {xtype:'ResearchPortlet', id: 'cvResearchPortlet', title: 'Daily Research',height: '300px'}
                    {xtype:'VideoPortlet', id: 'cvVideoPortlet', title: 'Citi Velocity Video',height: '300px'}
                ]
            }
        ]
)
