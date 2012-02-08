Ext.ns('cv', 'cv.views', 'cv.controllers')

#TODO to introduce a eventbus component to decouple the components
###
Ext.setup
    statusBarStyle: 'black'
    onReady: ->
        console.log('sencha ready')
###
Ext.Loader.setConfig({enabled:true})
#Ext.Loader.setConfig({enabled:true,paths:{'cv': './public/app/sencha/app'}})
Ext.application
    name: 'cv'
    #defaultTarget: 'viewport'
    #defaultUrl: 'page/index/MarketBuzz'
    controllers: ['Page']
    views: ['Main', 'Menu', 'Page']
    launch: ->
        console.log('launch')
        Ext.create('cv.view.Main')
        ###
        @viewport = new cv.Viewport(
            application: this
        )
        
        #render default page
        #hardcode to MarketBuzz 
        Ext.dispatch
            controller: 'page'
            action: 'index'
            id: 'MarketBuzz'
            historyUrl: 'page/index/MarketBuzz'
        ###



cv.util = {
    getCurrentHashUrl: ->
        return location.href.substring(location.href.indexOf('#')+1)

}