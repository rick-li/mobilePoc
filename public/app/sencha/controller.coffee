Ext.regController 'research',
    detail: (options)->
        pubId = options.pubId
        console.log('research controller '+pubId)
        if not @researchArticles
            @researchArticles = []
        if not @researchArticles[pubId]
            record = cv.researchStore.findRecord('pubId', pubId)
            console.log 'record is '
            @researchArticles[pubId] = new cv.ResearchDetail({record: record})
        Ext.getCmp('viewport').setActiveItem(@researchArticles[pubId], {type: 'slide', direction: 'right'})
            
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
    map.connect('research/:category/:pubId', {controller: 'research', action: 'detail'})
    map.connect(':controller/:action')

