Ext.define("Cv.view.tablet.Main",
    extend: 'Cv.view.Main'
    getSubItems: ->
        console.log 'tablet main'
        subItems = [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'right'}]
        subItems.push {xtype:'image',centered:true,src:'resources/images/CitiV_Logo_Top.png',minWidth: 233,minHeight:30}
        return subItems
)
