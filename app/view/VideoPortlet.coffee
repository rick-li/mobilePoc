Ext.define('cv.view.VideoPortlet',
    extend: 'cv.view.Portlet'
    config:
        id: 'VideoPortlet'
        height: 100
        xtype: 'VideoPortlet'
    initialize: ->
        console.log 'init video'
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = new Ext.List(
            height: @getHeight()
            itemTpl: '<img style="float:left;" src="public/app/libs/resources/images/video_head.jpg"><div class="" style="font-size:20px;">{analystName}</div><div class="">{analystType}</div>'
            store: cv.videoStore
        )
        return list

)

