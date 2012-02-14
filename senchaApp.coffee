Ext.ns('cv', 'cv.views', 'cv.controllers')

#TODO to introduce a eventbus component to decouple the components
###
Ext.setup
    statusBarStyle: 'black'
    onReady: ->
        console.log('sencha ready')
###
Ext.Loader.setConfig({enabled:false})
#Ext.Loader.setConfig({enabled:true,paths:{'cv': './public/app/sencha/app'}})
cv.app = Ext.application
    name: 'cv'
    controllers: ['Main','Page', 'Research']
    views: ['Main', 'Menu', 'Page', 'MarketBuzz', 'ResearchPortlet']
    models: ['Research']
    launch: ->
        console.log('launch')
        Ext.create('cv.view.Main')
        if(location.href.indexOf('#') == -1)
            #TODO get default page
            console.log('redirect to default page')
            @redirectTo('page/MarketBuzz')



cv.util = {
    getCurrentHashUrl: ->
        return location.href.substring(location.href.indexOf('#')+1)

}
