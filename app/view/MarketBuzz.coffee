Ext.define('cv.view.MarketBuzz',
    extend: 'Ext.Panel'
    config:
        id: 'cvMarketBuzz'
        layout: 
            type: 'hbox'
        listeners: [
            {
                event: 'doOrientationChange'
                fn: (obj) ->
                    console.log 'marketBuzz doOrientationChange'
                    console.log obj
                    orientation = Ext.Viewport.determineOrientation()
                    console.log orientation
                    newPortalItems = obj.getPortalItems(orientation)
                    obj.removeAll(false, true);
                    obj.setItems(newPortalItems);
                buffer: 500
                scope: this
            }
        ]
    initialize: ->
        console.log 'MarketBuzz initialize'
        @preCreatePortal()
        if Ext.os.is.Phone
            @setItems(@getPhonePortalItems());
        else
            orientation = Ext.Viewport.determineOrientation()
            @setItems(@getPortalItems(orientation));
        @callParent()
    preCreatePortal: ->
        @.cvResearchPortal1 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortal1',title: 'Daily Research 1'})
        @.cvResearchPortal2 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortal2',title: 'Daily Research 2'})
        @.cvResearchPortal3 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortal3',title: 'Daily Research 3'})
        @.cvVideoPortal1 = Ext.create('cv.view.VideoPortlet',{title: 'CitiVelocity Video 1' })
    getPhonePortalItems: ->
        console.log 'marketBuzz getPhonePortalItems'
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvVideoPortal1
                    @.cvResearchPortal1
                    @.cvResearchPortal2
                    @.cvResearchPortal3
                ]
            }
        ]
    getPortalItems: (orientation)->
        console.log 'marketBuzz getPortalItems'
        if orientation is 'landscape'
            return @getLandscapeItems()
        return @getPortraitItems()
    getLandscapeItems: ->
        #Ext.layout.AbstractBox(@.cvResearchPortal1,1)
        #Ext.layout.AbstractBox(@.cvResearchPortal2,2)
        #Ext.layout.AbstractBox(@.cvResearchPortal3,1)
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvVideoPortal1
                ]
            }
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvResearchPortal1
                    @.cvResearchPortal2
                ]
            }
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvResearchPortal3
                ]
            }
        ]
    getPortraitItems: ->
        #Ext.layout.AbstractBox(@.cvResearchPortal1,1)
        #Ext.layout.AbstractBox(@.cvResearchPortal2,1)
        #Ext.layout.AbstractBox(@.cvResearchPortal3,1)
        #@.cvResearchPortal1.setHeight('400')
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvVideoPortal1
                ]
            }
            {
                xtype: 'panel'
                flex: 2
                layout: 'vbox'
                items : [
                    @.cvResearchPortal1
                    @.cvResearchPortal2
                    @.cvResearchPortal3
                ]
            }
        ]
    getPortlets: ->
        console.log('get portlets')
        #research for the moment
        result = []
        #result.push new cv.view.Portlet({title: "test"})
        result.push new cv.view.ResearchPortlet({title: 'Daily Research',height:200})
        #result.push new cv.ResearchPortlet({title: 'Daily Research'})
        #result.push new cv.ResearchPortlet({title: 'Daily Research'})
        #result.push new cv.VideoPortlet({title: 'CitiVelocity Video' })
        return result
)
