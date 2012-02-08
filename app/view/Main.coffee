Ext.define("cv.view.Main",
    extend: 'Ext.Panel'
    config:
        id: 'viewport'
        fullscreen: true
        layout: 'card'
    initialize: ->
        console.log 'main init'
        cvMenu = Ext.create 'cv.view.Menu'
        @setItems ([
                {
                 docked: 'top'
                 xtype: 'toolbar'
                 layout: 'hbox'
                 title: 'CitiVelocity'
                 #items: [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...'}]
                }
                {docked: 'top', items:[cvMenu]}
            ])
        @callParent(arguments)
)
