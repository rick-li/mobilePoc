Ext.define("Cv.view.Main",
    extend: 'Ext.Panel'
    config:
        id: 'viewport'
        fullscreen: true
        layout: 'card'
        items: [
            #{docked: 'top', xtype: 'toolbar', title: 'Test'}
        ]
    ###
    okBtnHandler: ->
        cvMarketBuzz = Ext.getCmp('cvMarketBuzz')
        if cvMarketBuzz
            cvMarketBuzz.fireEvent('doOrientationChange', cvMarketBuzz)
    ###
    getTitleItems: ->
        return [
                {
                 docked: 'top'
                 xtype: 'toolbar'
                 minHeight: 22
                 #html:  '<div class="logo"><img style="margin:10px;" src="resources/images/CitiV_Logo_Top.png"></div>'
                 #layout: 'hbox'
                 #title: 'CitiVelocity'
                 #items: [{xtype: 'button', ui: 'ok', text: 'ok', handler: @okBtnHandler}]
                 items: @getSubItems()
                }
                {docked: 'top', items:[Ext.create 'Cv.view.Menu']}
            ]
    getSubItems: ->
        return []
    initialize: ->
        console.log 'main init'
        @setItems(@getTitleItems())
        @callParent()
)
