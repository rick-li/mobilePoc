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
        list = Ext.create('Ext.DataView'
            baseCls: Ext.baseCSSPrefix + 'list'
            cls: 'cv-dataview'
            itemTpl: '<div class="cv-list-item-content"><div class="cv-list-item-download"><div class="headLine">{headLine}</div></div><div><div class="author">{OBOPreferredName}</div><div class="pubDate">{formatedPubDate}</div></div><div class="content">{synopsis}</div></div>'
            itemCls: 'cv-list-item'
            store: Cv.researchStore
            #pinHeaders: true
            scrollable: 
              direction: 'vertical'
              directionLock: true
            scrollToTopOnRefresh: false
        )
        #console.log list.getViewItems()
        return list

)

