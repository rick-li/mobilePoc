Ext.define('Cv.view.Menu',
    extend: 'Ext.Toolbar'
    config:
        height: 40
        scrollable: 'horizontal'
    initialize: ->
        @setItems(
            [
                id: 'menuBarButtons'
                itemId: 'menuBarButtons'
                xtype: 'segmentedbutton'
                items: @getMenuItems()
            ]
        )
        @callParent(arguments)
    
    getMenuItems: ->
        #hardcode menu itmes for the time being
        #TODO read from datastore
        menus = ['MarketBuzz','Rates','Credit','FX','EmergeMarkets','Muni']
        menuItems = []
        # => to rebind this to foreach callback
        menus.forEach (page, i)=>
            #press the default one  TODO, should have a page id
            menuItems.push({id: page, text: page })
            #menuItems.push({id: page, text: page, handler: @menuTapHandler})
            menuItems[0]['pressed'] = true
        console.log menuItems
        return menuItems
    menuTapHandler: (button, e)->
        console.log (button.text + ' ' + button.id + ' is clicked')
        #dispatch to page/index/id action
        Ext.dispatch(
            controller: 'page'
            action: 'index'
            id: button.id
            historyUrl: 'page/index/'+button.id
        )
)
#Cv.views.menu = new Cv.Menu()
#Ext.reg('cvMenu', Cv.Menu)
