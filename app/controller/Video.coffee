Ext.define 'Cv.controller.Video',
    extend: 'Ext.app.Controller'
    config:
        refs:
            videoList: 'VideoPortlet dataview'
            videoBack: '#videoBack'
        control:
            videoList:
                select: 'redirect'
            #video back is for desktop browser and other platform that supports html5 video tag only
            videoBack:
                tap: ->
                    console.log 'video back'
                    historyActions = Cv.app.getHistory().getActions()
                    console.log historyActions
                    lastAction = historyActions[historyActions.length-2]
                    @redirectTo(lastAction.getUrl())
                
        routes:
            'video/:alertId': 'showDetail'
    redirect: (list)->
        #@lastUrl = Cv.util.getCurrentHashUrl()
        alertId = list.getSelection()[0].get('alertId')
        console.log 'list'+list
        @redirectTo('video/'+alertId)
    showDetail: (alertId)->
        console.log('video controller '+alertId)
        if window.device
          #use url in jsonData instead: videoURL
          new VideoPlayer().play("http://broken-links.com/tests/media/BigBuck.m4v")
        else
          if not @videoResources
              @videoResources = []
          if not @videoResources[alertId]
              record = Cv.videoStore.findRecord('alertId', alertId)
              console.log 'detail is '
              detail = @videoResources[alertId] = Ext.create('Cv.view.VideoDetail',{record: record})
              console.log detail
        Ext.getCmp('viewport').setActiveItem(detail, {type: 'slide', direction: 'left'})
     launch: ->
        console.log 'launch video controller'
