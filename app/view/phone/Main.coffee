Ext.define("Cv.view.phone.Main",
    extend: 'Cv.view.Main'
    
    initialize: ->
        console.log 'main phone init'
        @callParent()
        
        
    getSpecialItems: ->
        overlay = new Ext.Panel({
            styleHtmlContent: true
            docked: 'bottom'
            modal: true
            cls: 'overlay_panel'
            hideOnMaskTap: true
            items: [
                {
                    xtype:'searchfield'
                    name: 'searchfield'
                    cls: 'phone_searchfield'
                    placeholder: 'Search...'
                }
                {
                    xtype:'button'
                    docked:'right'
                    text: 'Cancel'
                    style: 'margin-left:70px;font-size:14px;font-weight:bold;font:arial,sans-serif;'
                    listeners:
                        tap: (button)->
                            overlay.hide()
                }
            ]
        })
        [{
            #ui: 'button'
            cls: 'phoneSearchIcon'
            docked: 'right'
            listeners: 
                tap: (button)->
                    console.log 'tap main'
                    console.log overlay
                    overlay.showBy(button)
        }] 
        
    
    #getSearchItem:->
     #   overlay = @add([{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...',docked: 'right'}])
        
)
