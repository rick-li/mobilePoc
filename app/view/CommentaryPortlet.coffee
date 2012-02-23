Ext.define('Cv.view.CommentaryPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'CommentaryPortlet'
    initialize: ->
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = Ext.create('Cv.component.DataView'
            itemTpl: '<div class="cv-list-item-content"><div class="headline">{headLine}</div><div><div class="author">{OBOPreferredName}</div><div class="pubdate">{formatedPubDate}</div></div><div class="content">{synopsis}</div></div>'
            store: Cv.researchStore
        )
        return list

)
