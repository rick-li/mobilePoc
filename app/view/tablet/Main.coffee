Ext.define("Cv.view.tablet.Main",
    extend: 'Cv.view.Main'
    getSpecialItems: ->
        console.log 'tablet main'
        return [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'right'}]
)
