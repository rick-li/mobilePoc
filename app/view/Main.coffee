Ext.define("cv.view.Main",
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
    initialize: ->
        console.log 'main init'
        cvMenu = Ext.create 'cv.view.Menu'
        @setItems ([
                {
                 docked: 'top'
                 xtype: 'toolbar'
                 html:  '<div style="margin-left:42%;"><img style="margin:10px;" src="resources/images/CitiV_Logo_Top.png"></div>'
                 #layout: 'hbox'
                 #title: 'CitiVelocity'
                 #items: [{xtype: 'button', ui: 'ok', text: 'ok', handler: @okBtnHandler}]
                 #items: [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...'}]
                }
                {docked: 'top', items:[cvMenu]}
            ])
        @callParent(arguments)
)
