Ext.define('cv.view.Portlet',
    extend: 'Ext.Panel'
    config:
        portletType: ''
        title: ''
    initialize: ->
        @add({docked: 'top', xtype: 'toolbar', title: @getTitle()})
        @callParent(arguments)

)

