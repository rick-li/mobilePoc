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
        list = Ext.create('Cv.component.DataView'
            itemTpl: '<div class="cv-list-item-content"><div class="cv-list-item-download"><div class="headLine">{headLine}</div></div><div><div class="author">{OBOPreferredName}</div><div class="pubDate">{formatedPubDate}</div></div><div class="content">{synopsis}</div></div>'
            store: Cv.researchStore
        )
        #console.log list.getViewItems()
        return list

)
