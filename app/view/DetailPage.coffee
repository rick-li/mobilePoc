Ext.define('Cv.view.DetailPage',
    extend: 'Ext.Panel'
    config:
        detailContent: ''
        detailTitle:''
    initialize: ->
        console.log 'initialize DetailPage'
        @setItems([
            {
                xtype: 'toolbar'
                title: @getDetailTitle()
                items:[{text:'Back', id:'detailBack',ui:'back'}]
            }
            {
                xtype: 'panel'
                html: @getDetailContent()
            }
        ])
        @callParent(arguments)
)
