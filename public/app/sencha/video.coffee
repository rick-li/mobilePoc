cv.VideoPortlet = Ext.extend(cv.Portlet,
    height: 300
    initComponent: ->
        @items = [{xtype:'video', posterUrl:'videoposter.png', url:'http://broken-links.com/tests/media/BigBuck.m4v', height: 200, width: 200}]
        cv.VideoPortlet.superclass.initComponent.call(this)
)
