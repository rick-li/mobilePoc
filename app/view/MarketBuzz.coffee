Ext.define('Cv.view.MarketBuzz',
    extend: 'Cv.view.Page'
    config:
        layout:
            type: 'hbox'
    initialize: ->
        console.log 'MarketBuzz initialize'
        @setItems(@getPortletItems())
        @callParent()
    getPortletItems: ->
        return {xtype:'panel', html: 'MarketBuzz Page',flex ;1}
)
