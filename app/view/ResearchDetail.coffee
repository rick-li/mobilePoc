Ext.define('cv.view.ResearchDetail',
    extend: 'Ext.Panel'
    config:
        record: ''
    initialize: ->
        console.log 'initialize detail'
        console.log @.getRecord()
        @setItems([
            {
                xtype: 'toolbar'
                title: @getRecord().get('headLine')
                items:[{text:'Back', id:'researchBack'}]
            },{
                tpl: '{synopsis}'
                data: @getRecord().getData()
                styleHtmlContent: true
            }])
        @callParent(arguments)
)
