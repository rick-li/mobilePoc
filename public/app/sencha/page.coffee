#page map
cv.pages = {}
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
        @html = '<h1>this is '+@pageId+ ' Page.'
        cv.Page.superclass.initComponent.call(this)
)
