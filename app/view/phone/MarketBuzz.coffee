Ext.define('Cv.view.phone.MarketBuzz',
    extend: 'Cv.view.MarketBuzz'
    config:
        id: 'cvPhoneMarketBuzz'
    getPortletItems: ->
        console.log 'marketBuzz phone getPortletItems'
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    {xtype:'CmCarousel',flex: 1, id: 'cvCarousel', title: 'Citi Minute'}
                    {xtype:'TopStoriesPortlet',flex: 1, id: 'cvTopStoriesPortlet', title: 'Top Stories'}
                    {xtype:'CommentaryPortlet',flex: 1, id: 'cvCommentaryPortlet', title: 'Daily Commentary'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet', title: 'Daily Research'}
                    {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet', title: 'Video 1'}
                ]
            }
        ]
)
