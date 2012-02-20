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
        list = new Ext.List(
            #height: @getHeight()
            itemTpl: '<img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine">{analystName}</div><div class="title">{title}</div><div class="pubDate">{formatedDate}</div>'
            #scrollable: true
            pinHeaders: true
            store: Cv.videoStore
            itemCls: 'videolistitem'
        )
        return list

)

