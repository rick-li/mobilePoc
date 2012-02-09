#page cache
renderPage = (pageId)->
    #render page here
Ext.define('cv.view.Page',
    extend: 'Ext.Panel'
    config:
        pageId: ''
        scrollable: 'vertical'
    ###
    constructor: (config)->
        @pageId = config?.pageId
        console.log 'constructor pageid '+@pageId
        cv.Page.superclass.constructor.call(this, config)
    ###
    initialize: ->
        console.log 'init Page'
        if @getPageId() != 'MarketBuzz'
            @setHtml  '<h1>this is '+@getPageId()+ ' Page.'
        else
            #read json and render the portlets
            portlets = @getPortlets()
            @.setItems(portlets)
        @callParent(arguments)
    getPortlets: ->
        console.log('get portlets')
        #research for the moment
        result = []
        #result.push new cv.view.Portlet({title: "test"})
        result.push new cv.view.ResearchPortlet({title: 'Daily Research',height:200})
        #result.push new cv.ResearchPortlet({title: 'Daily Research'})
        #result.push new cv.ResearchPortlet({title: 'Daily Research'})
        #result.push new cv.VideoPortlet({title: 'CitiVelocity Video' })
        return result
)
