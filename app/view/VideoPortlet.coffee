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
            height: @getHeight()
            itemTpl: '<img style="float:left;" src="public/app/libs/resources/images/video_head.jpg"><div class="headLine">{analystName}</div><div class="content">{analystType}</div>'
            store: cv.videoStore
            itemCls: 'listitem'
        )
        return list

)

