Ext.define('Cv.profile.Tablet'
    extend: 'Ext.app.Profile'
    config:
        name: 'tablet'
        controllers: ['Main','Page']
        views: ['Main','MarketBuzz']
    isActive: ->
        return Ext.os.is.Desktop || Ext.os.is.Tablet
        #return Ext.os.is.Tablet
    launch: ->
        console.log Date.now() + ' Cv.profile.Tablet launch'
        @callParent()
        Ext.create('Cv.view.tablet.Main')
)
