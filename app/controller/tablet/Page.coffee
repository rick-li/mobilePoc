Ext.define 'Cv.controller.tablet.Page',
    extend: 'Cv.controller.Page'
    createMarketBuzz: (pageId)->
        return Ext.create('Cv.view.tablet.MarketBuzz',{pageId: pageId});
    launch:->
        console.log 'launch tablet page controller'
        @callParent()
