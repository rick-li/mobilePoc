#page cache
cv.pages = {}
cv.portlets = {}
renderPage = (pageId)->
    #render page here
cv.Page = Ext.extend(Ext.Panel,
    pageId: ''
    constructor: (config)->
        @pageId = config?.pageId
        console.log 'constructor pageid '+@pageId
        cv.Page.superclass.constructor.call(this, config)
    initComponent: ->
        console.log 'init component'
        if @pageId != 'MarketBuzz'
            @html = '<h1>this is '+@pageId+ ' Page.'
        else
            #read json and render the portlets
            portlets = @getPortlets()
            #portlets = []
            Ext.apply(this,
                items: portlets
                #layout: 'vbox'
                #align: 'stretch'
                scroll: 'vertical'
            )

        cv.Page.superclass.initComponent.call(this)
    getPortlets: ->
        console.log('get portlets')
        #research for the moment
        result = []
        result.push new cv.ResearchPortlet({title: 'Daily Research'})
        result.push new cv.ResearchPortlet({title: 'Daily Research'})
        result.push new cv.ResearchPortlet({title: 'Daily Research'})
        result.push new cv.VideoPortlet({title: 'CitiVelocity Video' })
        return result
)
