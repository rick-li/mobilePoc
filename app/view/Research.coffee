Ext.define('cv.view.ResearchPortlet',
    extend: 'cv.view.Portlet'
    xtype: 'research'
    config:
        height: 100
    initialize: ->
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            height: @getHeight()
            itemTpl: '<div>{headLine}</div><div>{synopsis}</div>'
            store: cv.researchStore
        )
        return list
)

