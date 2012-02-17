Ext.define('cv.view.VideoPortlet',
    extend: 'cv.view.Portlet'
    config:
        id: 'VideoPortlet'
        height: 200
        xtype: 'VideoPortlet'
    initialize: ->
        console.log 'init video'
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            #height: @getHeight()
            itemTpl: '<img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine">{analystName}</div>'
            #scrollable: true
            pinHeaders: true
            store: cv.videoStore
            itemCls: 'videolistitem'
        )
        return list

)

