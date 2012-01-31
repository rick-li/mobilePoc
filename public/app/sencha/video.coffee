cv.VideoPortlet = Ext.extend(cv.Portlet,
    height: 300
    initComponent: ->
        @items = [{xtype:'video', posterUrl:'videoposter.png', url:'http://mediaelementjs.com/media/echo-hereweare.mp4', height: 200, width: 200}]
        cv.VideoPortlet.superclass.initComponent.call(this)
)
