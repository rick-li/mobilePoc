Ext.define 'Cv.controller.TopStories',
    extend: 'Ext.app.Controller'
    config:
        routes:
            'topStories/:docId': 'showDetail'
    showDetail: (docId)->
        console.log('topStories controller '+docId)
        if not @topStoriesContent
            @topStoriesContent = {}
        if true#window.device
            if not @topStoriesContent[docId]
                detail = @getDetail(docId)
                if detail && detail.contentUrl
                    @requestContent(docId,detail.contentUrl,detail.title)
            else
                @showContent(docId)
        return null
    getDetail: (docId)->
        if not @topStoriesItems
            @topStoriesItems = []
        if @topStoriesItems[docId]
            return @topStoriesItems[docId]
        else
          itemArray = Cv.topStoriesStore.getData().items
          itemArray.forEach (item,i)=>
              if item.data && item.data.topics
                  item.data.topics.forEach (t, j)=>
                      if t && t.docId
                          @topStoriesItems[t.docId]=t
        return @topStoriesItems[docId]
    requestContent: (docId,contentUrl,title)->
        self = this
        Ext.Ajax.request
            url: contentUrl
            success: (response)->
                text = response.responseText
                self.topStoriesContent[docId] = Ext.create('Cv.view.DetailPage',{detailContent: text,detailTitle:title})
                self.showContent(docId)
    showContent: (docId)->
        Ext.getCmp('viewport').setActiveItem(@topStoriesContent[docId], {type: 'slide', direction: 'left'})
    launch: ->
        console.log 'launch topStories controller'

