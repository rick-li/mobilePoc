Ext.define('Cv.view.ResearchPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'ResearchPortlet'
    initialize: ->
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = Ext.create('Cv.component.DataView'
            itemTpl: '<div class="cv-list-item-content"><div class="cv-list-item-download"><div class="headline">{headLine}</div></div><div><div class="author">{OBOPreferredName}</div><div class="pubdate">{formatedPubDate}</div></div><div class="content">{synopsis}</div></div>'
            store: Cv.researchStore
        )
        return list

)
