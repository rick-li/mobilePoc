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
                    {xtype:'VideoPortlet',height: '300px', id: 'cvVideoPortlet1', title: 'Video 1'}
                    {xtype:'ResearchPortlet',height: '300px', id: 'cvResearchPortlet1', title: 'Daily Research 1'}
                    {xtype:'CommentaryPortlet',height: '300px', id: 'cvCommentaryPortlet2', title: 'Daily Commentary'}
                    {xtype:'ResearchPortlet',height: '300px', id: 'cvResearchPortlet3', title: 'Daily Research 3'}
                ]
            }
        ]
)
