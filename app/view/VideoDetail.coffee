Ext.define('Cv.view.VideoDetail',
    extend: 'Ext.Panel'
    config:
        record: ''
    initialize: ->
        console.log 'initialize detail'
        console.log @.getRecord()
        @setItems([
            {
                xtype: 'toolbar'
                title: @getRecord().get('analystName')
                items:[{text:'Back', id:'detailBack'}]
            },{
                tpl: '{analystType}'
                data: @getRecord().getData()
                styleHtmlContent: true
            },{
                tpl: '{videoURL}'
                items: [{
                  xtype: 'video',
                  url: 'http://broken-links.com/tests/media/BigBuck.m4v',
                  loop: true,
                  width: 200,
                  height: 200,
                  posterUrl: ''
                }]
            }])
        @callParent(arguments)
)
