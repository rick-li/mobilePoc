Ext.define 'cv.controller.Research',
    extend: 'Ext.app.Controller'
    config:
        refs:
            researchList: '#researchPortlet list'
            researchBack: '#researchBack'
        control:
            researchList:
                itemtap: 'redirect'
            researchBack:
                tap: ->
                    console.log 'research back'
                    historyActions = cv.app.getHistory().getActions()
                    console.log historyActions
                    lastAction = historyActions[historyActions.length-2]
                    @redirectTo(lastAction.getUrl())
                
        routes:
            'research/:pubId': 'showDetail'
    redirect: (list)->
        #@lastUrl = cv.util.getCurrentHashUrl()
        pubId = list.getSelection()[0].get('pubId')
        @redirectTo('research/'+pubId)
    showDetail: (pubId)->
        console.log('research controller '+pubId)
        if not @researchArticles
            @researchArticles = []
        if not @researchArticles[pubId]
            record = cv.researchStore.findRecord('pubId', pubId)
            console.log 'detail is '
            @researchArticles[pubId] = Ext.create('cv.view.ResearchDetail',{record: record})
        detail = @researchArticles[pubId]
        console.log detail
        Ext.getCmp('viewport').setActiveItem(detail, {type: 'slide', direction: 'left'})
    launch: ->
        console.log 'launch research controller'
