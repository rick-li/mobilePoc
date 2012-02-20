Ext.define 'Cv.controller.Page',
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
            if pageId is 'MarketBuzz'
                pages[pageId] = @createMarketBuzz(pageId)
            else
                pages[pageId] = Ext.create('Cv.view.Page',{pageId: pageId,html:"It's "+pageId+" page."})

        menuBar = Ext.getCmp('menuBarButtons')
        #make menu selected, and suppress the event to prevent loop call 
        activeMenuBtn = menuBar.child('#'+pageId)
        menuBar.setPressedButtons(activeMenuBtn)
        Ext.getCmp('viewport').setActiveItem(pages[pageId], {type: 'slide', direction: 'right'})
    createMarketBuzz: (pageId)->
        return undefined#Ext.create('Cv.view.MarketBuzz',{pageId: pageId});
    launch:->
        console.log 'launch Page controller'