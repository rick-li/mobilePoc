Ext.define('Cv.profile.Phone'
    extend: 'Ext.app.Profile'
    config: 
        name: 'phone'
        controllers: ['Page']
        views: ['Main','MarketBuzz']
    isActive: ->
        return Ext.os.is.Phone;
    launch: ->
        console.log Date.now() + ' Cv.profile.Phone launch'
        @callParent()
        Ext.create('Cv.view.phone.Main',{height: 600})
)