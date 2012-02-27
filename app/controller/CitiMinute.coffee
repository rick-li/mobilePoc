Ext.define 'Cv.controller.CitiMinute',
    extend: 'Ext.app.Controller'
    config:
        refs:
            carousels: '#cmCrls activeItem'
        control:
            carousels:
                tap: 'redirect'
        routes:
            'citiminute/:alertId': 'showDetail'
    redirect: (cm)->
        console.log 'redirect'
        #@lastUrl = Cv.util.getCurrentHashUrl()
        alertId = carousels.getActiveItem().getId()
        console.log 'carousels'+carousels
        @redirectTo('citiminute/'+alertId)
    showDetail: (alertId)->
        console.log('citiminute controller '+alertId)
        if window.device
          #use url in jsonData instead: 
          new VideoPlayer().play("http://broken-links.com/tests/media/BigBuck.m4v")
        else
          #if not @videoResources
           #   @videoResources = []
          #if not @videoResources[alertId]
           #   record = Cv.videoStore.findRecord('alertId', alertId)
            #  console.log 'detail is '
             # detail = @videoResources[alertId] = Ext.create('Cv.view.VideoDetail',{record: record})
             # console.log detail
        Ext.getCmp('viewport').setActiveItem(detail, {type: 'slide', direction: 'left'})
     launch: ->
        console.log 'launch citiminute controller'
