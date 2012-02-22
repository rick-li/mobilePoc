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
                    {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet1', title: 'Video 1'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet1', title: 'Daily Research 1'}
                    {xtype:'CommentaryPortlet',flex: 1, id: 'cvCommentaryPortlet2', title: 'Daily Commentary'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet3', title: 'Daily Research 3'}
                ]
            }
        ]
)
