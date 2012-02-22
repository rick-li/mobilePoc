Ext.define('Cv.view.tablet.MarketBuzz',
    extend: 'Cv.view.MarketBuzz'
    config:
        id: 'cvTabletMarketBuzz'
        listeners: [
            {
                event: 'doOrientationChange'
                fn: (obj) ->
                    console.log 'marketBuzz doOrientationChange'
                    console.log obj
                    #orientation = Ext.Viewport.determineOrientation()
                    orientation = Cv.util.getOrientation()
                    console.log orientation
                    newPortalItems = obj.getTabletItems(orientation)
                    obj.removeAll(false, true)
                    obj.setItems(newPortalItems)
                buffer: 500
                scope: this
            }
        ]
    getPortletItems: ()->
        console.log 'marketBuzz getPortletItems'
        #orientation = Ext.Viewport.determineOrientation()
        orientation = Cv.util.getOrientation()
        return @getTabletItems(orientation)
    getTabletItems : (orientation)->
        console.log 'marketBuzz getPortalItems'
        if orientation is 'landscape'
            return @getLandscapeItems()
        return @getPortraitItems()
    getRelatedPortal: ->
        @.cvResearchPortlet = Ext.getCmp('cvResearchPortlet')
        @.cvVideoPortlet = Ext.getCmp('cvVideoPortlet')
        @.cvCarouse = Ext.getCmp('cvCarouse')
        @.cvTopStoriesPortlet = Ext.getCmp('cvTopStoriesPortlet')
        if @.cvResearchPortlet
            Ext.layout.AbstractBox(@.cvResearchPortlet,1)
        else
            @.cvResearchPortlet = {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet', title: 'Daily Research'}
        if @.cvVideoPortlet
            Ext.layout.AbstractBox(@.cvVideoPortlet,1)
        else
            @.cvVideoPortlet = {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet', title: 'Citi Velocity Video'}
        if @.cvCarouse
            Ext.layout.AbstractBox(@.cvCarouse,1)
        else
            @.cvCarouse = {xtype:'CmCarouse',flex: 1, id: 'cvCarouse', title: 'Citi Minute'}
        if @.cvTopStoriesPortlet
            Ext.layout.AbstractBox(@.cvTopStoriesPortlet,1)
        else
            @.cvTopStoriesPortlet = {xtype:'TopStoriesPortlet',flex: 1, id: 'cvTopStoriesPortlet', title: 'Top Stories'}
    getLandscapeItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            @.cvTopStoriesPortlet
            @.cvResearchPortlet
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvCarouse
                    @.cvVideoPortlet
                ]
            }
            
        ]
    getPortraitItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvTopStoriesPortlet
                    @.cvResearchPortlet
                ]
            }
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvCarousel
                    @.cvVideoPortlet
                ]
            }
        ]
)
