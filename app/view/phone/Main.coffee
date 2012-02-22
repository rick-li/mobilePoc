Ext.define("Cv.view.phone.Main",
    extend: 'Cv.view.Main'
    getSpecialItems: ->
        return [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'right'}]
)
