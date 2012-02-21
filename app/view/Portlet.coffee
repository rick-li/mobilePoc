Ext.define('Cv.view.Portlet',
    extend: 'Ext.Panel'
    config:
        portletType: ''
        title: ''
        cls: 'portal'
        layout: 'fit'
    initialize: ->
        @add({docked: 'top', xtype: 'toolbar', title: @getTitle(), cls: 'portalTitle'})
        #@add({docked: 'top', xtype: 'toolbar', title: @getTitle(), cls: 'portalTitle',layout: {align: 'start',pack: 'justify'},centered:false})
        @callParent(arguments)

)

