Ext.define('cv.view.ResearchPortlet',
    extend: 'cv.view.Portlet'
    xtype: 'research'
    config:
        id: 'researchPortlet'
        height: 200
    initialize: ->
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            height: @getHeight()
            itemTpl: '<div class="headLine">{headLine}</div><div class="synopsis">{synopsis}</div>'
            store: cv.researchStore
        )
        return list

)

