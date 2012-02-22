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
                    {xtype:'VideoPortlet', id: 'cvVideoPortlet1', title: 'Video 1',height: '300px'}
                    {xtype:'ResearchPortlet', id: 'cvResearchPortlet1', title: 'Daily Research 1',height: '300px'}
                    {xtype:'CommentaryPortlet', id: 'cvCommentaryPortlet2', title: 'Daily Commentary',height: '300px'}
                    {xtype:'ResearchPortlet',id: 'cvResearchPortlet3', title: 'Daily Research 3',height: '300px'}
                ]
            }
        ]
)
