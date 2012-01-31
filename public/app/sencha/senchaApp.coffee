Ext.ns('cv', 'cv.views', 'cv.controllers')

#TODO to introduce a eventbus component to decouple the components
#
Ext.setup
    statusBarStyle: 'black'
    onReady: ->
        console.log('sencha ready')

Ext.regApplication
    name: 'cv'
    defaultTarget: 'viewport'
    #defaultUrl: 'page/index/MarketBuzz'
    launch: ->
        console.log('launch')
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

cv.Viewport = Ext.extend(Ext.Panel,
    id: 'viewport'
    fullscreen: true
    layout: 'card'
    initComponent: ->
        Ext.apply( this,
            dockedItems: [
                {
                 dock: 'top'
                 xtype: 'toolbar'
                 layout: 'hbox'
                 title: 'CitiVelocity'
                 items: [{xtype:'searchfield',name: 'searchfield',placeholder: 'Search...'}]
                }
                {dock: 'top', xtype: 'cvMenu'}
            ]
        )
        cv.Viewport.superclass.initComponent.apply(this, arguments)
)


cv.util = {
    getCurrentHashUrl: ->
        return location.href.substring(location.href.indexOf('#')+1)

}
