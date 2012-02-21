Ext.define('Cv.view.ResearchDetail',
    extend: 'Ext.Panel'
    config:
        record: ''
    initialize: ->
        console.log 'initialize detail'
        console.log @.getRecord()
        @setItems([
            {
                xtype: 'toolbar'
                title: {xtype:'title', title: @getRecord().get('headLine')}
                items:[{text:'Back', id:'researchBack'}]
            },{
                tpl: '{synopsis}'
                data: @getRecord().getData()
                styleHtmlContent: true
            }])
        @callParent(arguments)
)
