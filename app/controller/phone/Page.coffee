Ext.define 'Cv.controller.phone.Page',
    extend: 'Cv.controller.Page'
    createMarketBuzz: (pageId)->
        return Ext.create('Cv.view.phone.MarketBuzz',{pageId: pageId});
    launch:->
        console.log 'launch phone page controller'
        @callParent()
