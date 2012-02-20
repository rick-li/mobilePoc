Ext.ns('Cv', 'Cv.views', 'Cv.controllers')

#TODO to introduce a eventbus component to decouple the components
###
Ext.setup
    statusBarStyle: 'black'
    onReady: ->
        console.log('sencha ready')
###
Ext.Loader.setConfig({enabled:false})
#Ext.Loader.setConfig({enabled:true,paths:{'cv': './public/app/sencha/app'}})
Cv.app = Ext.application
    name: 'Cv'
    controllers: ['Main','Page', 'Research', 'Video']
    views: ['Main', 'Menu', 'Page', 'MarketBuzz', 'ResearchPortlet']
    models: ['Research']
    launch: ->
        console.log('launch')
        Ext.create('Cv.view.Main')
        if(location.href.indexOf('#') == -1)
            #TODO get default page
            console.log('redirect to default page')
            @redirectTo('page/MarketBuzz')



Cv.util = {
    getCurrentHashUrl: ->
        return location.href.substring(location.href.indexOf('#')+1)
    getOrientation: ->
        if Ext.Viewport.getWindowHeight() >= Ext.Viewport.getWindowWidth()
            return Ext.Viewport.PORTRAIT
        return Ext.Viewport.LANDSCAPE

}
