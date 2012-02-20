Ext.define('Cv.view.ResearchPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'ResearchPortlet'
    config:
        #id: 'researchPortlet'
        #height: 200
        layout: 'fit'
    initialize: ->
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            #height: @getHeight()
            itemTpl: '<div class="headLine">{headLine}</div><div><div class="author">{OBOPreferredName}</div><div class="pubDate">{formatedPubDate}</div></div><div class="content">{synopsis}</div>'
            itemCls: 'listitem'
            store: Cv.researchStore
            pinHeaders: true
            #scrollable: true
        )
        return list

)

