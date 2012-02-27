Ext.define('Cv.view.VideoPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'VideoPortlet'
    initialize: ->
        console.log 'init video'
        @add(@createList())
        @callParent(arguments)
    createList: ->
        list = Ext.create('Cv.component.DataView'
            itemTpl: '<div class="cv-list-item-content"><img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headline" style="padding-left:3px !important;">{analystName}</div><div class="title">{title}</div><div class="pubdate">{formatedDate}</div></div>'
            store: Cv.videoStore
        )
        return list
)

