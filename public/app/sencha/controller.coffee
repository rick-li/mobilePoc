Ext.regController 'page',
    index: (options)->
        pageId = options.id
        console.log('page index id: '+options.id)
        #TODO render the page here.
        #1. get the page info from store
        #2. create Page panel and insert to viewport
        if not cv.pages[pageId]
            cv.pages[pageId] = new cv.Page({pageId: pageId})

        #make menu selected, and suppress the event to prevent loop call 
        Ext.getCmp('menuBarButtons').setPressed(Ext.getCmp(pageId), true, false)
        Ext.getCmp('viewport').setActiveItem(cv.pages[pageId], {type: 'slide', direction: 'right'})
        #sync up the menu button here
        #
    
Ext.Router.draw (map)->
    map.connect('page/index/:id', {controller: 'page', action: 'index'})
    map.connect(':controller/:action')

