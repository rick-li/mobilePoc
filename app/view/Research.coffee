Ext.define('cv.view.ResearchPortlet',
    extend: 'cv.view.Portlet'
    xtype: 'research'
    config:
        height: 200
    initialize: ->
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            itemTpl: '<div>{headLine}</div><div>{synopsis}</div>'
            store: cv.researchStore
        )
        return list
)

