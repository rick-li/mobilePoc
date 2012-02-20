Ext.define 'cv.controller.Research',
    extend: 'Ext.app.Controller'
    config:
        refs:
            researchList: 'research list'
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
        if window.device
            record = cv.researchStore.findRecord('pubId', pubId)
            fileLink = record.get('fileLink')
            fileName = fileLink
            if fileName.indexOf('/') != -1
                fileName = fileLink.substring(fileLink.lastIndexOf('/')+1)
            mask = Ext.create('Ext.LoadMask')
            Ext.Viewport.add(mask)
            new Downloader().downloadFile(fileLink, {dirName:'/sdcard/cv', overwrite: false}, (result)->
                console.log(JSON.stringify(result))
                #TODO display a progressbar here
                if result.progress == 100
                    mask.destroy()
                    new PdfViewer().play(fileName)
            ,->
                mask.destroy()
                alert('download file '+fileLink+' failed.')
            )
            return
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
