Ext.define('Cv.view.ResearchPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'research'
    config:
        height: 200
    initialize: ->
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            itemTpl: '<div>{headLine}</div><div>{synopsis}</div>'
            store: Cv.researchStore
        )
        return list
)

