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
        @.cvCarousel = Ext.getCmp('cvCarousel')
        @.cvTopStoriesPortlet = Ext.getCmp('cvTopStoriesPortlet')
        @.cvCommentary = Ext.getCmp('cvCommentary')
        if @.cvResearchPortlet
            Ext.layout.AbstractBox(@.cvResearchPortlet,1)
        else
            @.cvResearchPortlet = {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet', title: 'Daily Research'}
        
        if @.cvCommentary
            Ext.layout.AbstractBox(@.cvCommentary,1)
        else
            @.cvCommentary = {xtype:'CommentaryPortlet',flex: 1, id: 'cvCommentary', title: 'Daily Commentary'}
        
        if @.cvVideoPortlet
            Ext.layout.AbstractBox(@.cvVideoPortlet,1)
        else
            @.cvVideoPortlet = {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet', title: 'Citi Velocity Video'}
        
        if @.cvCarousel
            Ext.layout.AbstractBox(@.cvCarousel,1)
        else
            @.cvCarousel = {xtype:'CmCarousel',flex: 1, id: 'cvCarousel', title: 'Citi Minute'}
        
        if @.cvTopStoriesPortlet
            Ext.layout.AbstractBox(@.cvTopStoriesPortlet,1)
        else
            @.cvTopStoriesPortlet = {xtype:'TopStoriesPortlet',flex: 1, id: 'cvTopStoriesPortlet', title: 'Top Stories'}
    getLandscapeItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            @.cvTopStoriesPortlet
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvResearchPortlet
                    @.cvCommentary
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
    getPortraitItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            {
                xtype: 'panel'
                flex: 2
                layout: 'vbox'
                items : [
                    @.cvTopStoriesPortlet
                    @.cvCommentary
                ]
            }
            {
                xtype: 'panel'
                flex: 2
                layout: 'vbox'
                items : [
                    @.cvResearchPortlet
                    @.cvCarousel
                    @.cvVideoPortlet
                ]
            }
        ]
)
