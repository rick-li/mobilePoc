Ext.define('Cv.view.VideoPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'VideoPortlet'
    config:
        #id: 'VideoPortlet'
        #height: 200
        layout: 'fit'
    initialize: ->
        console.log 'init video'
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = Ext.create('Ext.DataView'
            baseCls: Ext.baseCSSPrefix + 'list'
            cls: 'cv-dataview'
            itemTpl: '<div class="cv-list-item-content"><img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine" style="padding-left:0px !important;">{analystName}</div><div class="title">{title}</div><div class="pubDate">{formatedDate}</div></div>'
            #scrollable: true
            pinHeaders: true
            store: Cv.videoStore
            itemCls: 'cv-list-item'
        )
        return list

)

