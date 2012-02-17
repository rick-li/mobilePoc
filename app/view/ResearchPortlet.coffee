Ext.define('cv.view.ResearchPortlet',
    extend: 'cv.view.Portlet'
    xtype: 'research'
    config:
        id: 'researchPortlet'
        height: 200
        layout: 'fit'
    initialize: ->
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            itemTpl: '<div class="headLine">{headLine}</div><div class="synopsis">{synopsis}</div>'
            store: cv.researchStore
            pinHeaders: true
            #scrollable: true
        )
        return list

)

