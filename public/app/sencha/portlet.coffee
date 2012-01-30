cv.Portlet = Ext.extend(Ext.Panel,
    portletType: ''
    title: ''
    initComponent: ->
        cv.Portlet.superclass.initComponent.call(this)
        #add title
        @.addDocked(
            xtype: 'toolbar'
            title: @title
        )
)
