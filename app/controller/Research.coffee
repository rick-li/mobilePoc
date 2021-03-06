Ext.define 'Cv.controller.Research',
    extend: 'Ext.app.Controller'
    config:
        refs:
            researchList: 'ResearchPortlet dataview'
        control:
            researchList:
                itemtap: 'redirect'
        routes:
            'research/:pubId': 'showDetail'
    redirect: (list)->
        #@lastUrl = Cv.util.getCurrentHashUrl()
        pubId = list.getSelection()[0].get('pubId')
        @redirectTo('research/'+pubId)
    showDetail: (pubId)->
        console.log('research controller '+pubId)
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
        if not @researchArticles
            @researchArticles = []
        if not @researchArticles[pubId]
            record = Cv.researchStore.findRecord('pubId', pubId)
            console.log 'detail is '
            @researchArticles[pubId] = Ext.create('Cv.view.ResearchDetail',{record: record})
        detail = @researchArticles[pubId]
        console.log detail
        Ext.getCmp('viewport').setActiveItem(detail, {type: 'slide', direction: 'left'})
    launch: ->
        console.log 'launch research controller'

