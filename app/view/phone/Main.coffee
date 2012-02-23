Ext.define("Cv.view.phone.Main",
    extend: 'Cv.view.Main'
    
    initialize: ->
        console.log 'main phone init'
        @callParent()
        
        
    getSpecialItems: ->
        overlay = @add([{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'bottom',modal: true,hidden: true}])
        isShow = false
        [{
            xtype: 'button'
            cls: 'phoneSearchIcon'
            docked: 'right'
            listeners: 
                tap: (button)->
                    console.log 'tap main'
                    console.log overlay
                    console.log isShow
                    #if not isShow
                    #overlay.showBy(button)
        }] 
        
    
    #getSearchItem:->
     #   overlay = @add([{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'right'}])
        
)
