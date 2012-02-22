Ext.define 'Cv.controller.Commentary',
    extend: 'Ext.app.Controller'
    config:
        refs:
            researchList: 'CommentaryPortlet dataview'
            researchBack: '#commentaryBack'
        control:
            researchList:
                itemtap: 'redirect'
            researchBack:
                tap: ->
                    console.log 'commentary back'
                    historyActions = Cv.app.getHistory().getActions()
                    console.log historyActions
                    lastAction = historyActions[historyActions.length-2]
                    @redirectTo(lastAction.getUrl())
                
        routes:
            'commentary/:pubId': 'showDetail'
    redirect: (list)->
        pubId = list.getSelection()[0].get('pubId')
        @redirectTo('commentary/'+pubId)
    showDetail: (pubId)->
        console.log('commentary controller '+pubId)
        if window.device
            record = Cv.researchStore.findRecord('pubId', pubId)
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
        if not @commentaryArticles
            @commentaryArticles = []
        if not @commentaryArticles[pubId]
            record = Cv.researchStore.findRecord('pubId', pubId)
            console.log 'detail is '
            @commentaryArticles[pubId] = Ext.create('Cv.view.ResearchDetail',{record: record})
        detail = @commentaryArticles[pubId]
        console.log detail
        Ext.getCmp('viewport').setActiveItem(detail, {type: 'slide', direction: 'left'})
    launch: ->
        console.log 'launch commentary controller'

