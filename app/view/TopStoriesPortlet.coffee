Ext.define('Cv.view.TopStoriesPortlet',
    extend: 'Cv.view.Portlet'
    xtype: 'TopStoriesPortlet'
    config:
        cls: 'portal cv-topstories'
    initialize: ->
        console.log 'initialize top stories'
        @add(@createList())
        @callParent(arguments)
    createList: ->
        tpl = @getXTemplate()
        list = Ext.create('Cv.component.DataView'
            itemTpl: tpl
            store: Cv.topStoriesStore
            pageSize: 3
        )
        return list
    getXTemplate: ->
        new Ext.XTemplate(
          '<div class="x-container x-toolbar"><div class="x-inner x-toolbar-inner"><div class="x-left"><div class="x-title x-floating x-layout-box-item" style="z-index: 2 !important; -webkit-box-flex: 1; "><div class="x-innerhtml">{title}</div></div></div></div></div>'
          '<div class="cv-list-item-content">'
          '<tpl for="topics">'
          '<tpl if="xindex === 1">'
          '<div class="cv-list-item-headline '
          '<tpl if="this.isCommentary(type)">cv-list-item-commentary'
          '<tpl else>cv-list-item-research</tpl>'
          '"><div class="headline">{title}</div></div><div><div class="author">{authorName}</div><div class="pubdate">{docDt}</div></div><div><img style="float:left;" src="resources/img/ana_demo.jpg"><div class="summary">{summary}</div></div>'          
          '</tpl><tpl if="xindex &gt; 1 && xindex &lt; 4">'
          '<div class="content '
          '<tpl if="this.isCommentary(type)">cv-list-item-commentary'
          '<tpl else>cv-list-item-research</tpl>'
          '">{title}<div>'
          '</tpl></tpl>'
          '</div>'
          isCommentary: (type)->
              return type is 'COMMENTARY';
        )
)
