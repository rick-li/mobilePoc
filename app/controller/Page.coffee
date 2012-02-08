###
Ext.define 'cv.controller.Research',
    extends: 'Ext.app.Controller'
    detail: (options)->
        pubId = options.pubId
        console.log('research controller '+pubId)
        if not @researchArticles
            @researchArticles = []
        if not @researchArticles[pubId]
            record = cv.researchStore.findRecord('pubId', pubId)
            console.log 'record is '
            @researchArticles[pubId] = new cv.ResearchDetail({record: record})
        Ext.getCmp('viewport').setActiveItem(@researchArticles[pubId], {type: 'slide', direction: 'left'})
###
            
Ext.define 'cv.controller.Page',
    extend: 'Ext.app.Controller'
    config:
        pages: {}
        refs:
            menuBtn: '#menuBarButtons button'
        control:
            menuBtn:
                tap: 'redirect'
        routes:
            'page/:pageId': 'switchPage'
    redirect: (menuBtn)->
        console.log menuBtn
        @redirectTo('page/'+menuBtn.getId())
    switchPage: (pageId)->
        console.log('page index id: '+ pageId)
        #TODO render the page here.
        #1. get the page info from store
        #2. create Page panel and insert to viewport
        pages = @getPages()
        if not pages[pageId]
            pages[pageId] = new cv.view.Page({pageId: pageId})

        menuBar = Ext.getCmp('menuBarButtons')
        #make menu selected, and suppress the event to prevent loop call 
        activeMenuBtn = menuBar.child('#'+pageId)
        menuBar.setPressedButtons(activeMenuBtn)
        Ext.getCmp('viewport').setActiveItem(pages[pageId], {type: 'slide', direction: 'right'})
    launch:->
        console.log 'launch controller'
        #sync up the menu button here
        #