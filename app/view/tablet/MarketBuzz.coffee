Ext.define('Cv.view.tablet.MarketBuzz',
    extend: 'Cv.view.MarketBuzz'
    config:
        id: 'cvTabletMarketBuzz'
        scrollable: 'vertical'
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
        #@preCreatePortal()
        #orientation = Ext.Viewport.determineOrientation()
        orientation = Cv.util.getOrientation()
        return @getTabletItems(orientation)
    getTabletItems : (orientation)->
        console.log 'marketBuzz getPortalItems'
        if orientation is 'landscape'
            return @getLandscapeItems()
        return @getPortraitItems()
    ###
    preCreatePortal: ->
        @.cvResearchPortlet1 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet1',title: 'Daily Research 1'})
        @.cvResearchPortlet2 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet2',title: 'Daily Research 2'})
        @.cvResearchPortlet3 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet3',title: 'Daily Research 3'})
        @.cvVideoPortlet1 = Ext.create('Cv.view.VideoPortlet',{id:'cvVideoPortlet1', title: 'CitiVelocity Video 1' })
    ###
    getRelatedPortal: ->
        @.cvResearchPortlet1 = Ext.getCmp('cvResearchPortlet1')
        @.cvResearchPortlet2 = Ext.getCmp('cvResearchPortlet2')
        @.cvResearchPortlet3 = Ext.getCmp('cvResearchPortlet3')
        @.cvVideoPortlet1 = Ext.getCmp('cvVideoPortlet1')
        if @.cvResearchPortlet1
            Ext.layout.AbstractBox(@.cvResearchPortlet1,1)
        else
            @.cvResearchPortlet1 = {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet1', title: 'Daily Research 1'}
        if @.cvResearchPortlet2
            Ext.layout.AbstractBox(@.cvResearchPortlet2,1)
        else
            @.cvResearchPortlet2 = {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet2', title: 'Daily Research 2'}
        if @.cvResearchPortlet3
            Ext.layout.AbstractBox(@.cvResearchPortlet3,1)
        else
            @.cvResearchPortlet3 = {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet3', title: 'Daily Research 3'}
        if @.cvVideoPortlet1
            Ext.layout.AbstractBox(@.cvVideoPortlet1,1)
        else
            @.cvVideoPortlet1 = {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet1', title: 'Video 1'}
    getLandscapeItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            @.cvVideoPortlet1
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    @.cvResearchPortlet1
                    @.cvResearchPortlet2
                ]
            }
            @.cvResearchPortlet3
        ]
    getPortraitItems: ->
        console.log 'marketBuzz getLandscapeItems'
        @getRelatedPortal()
        return [
            @.cvVideoPortlet1
            {
                xtype: 'panel'
                flex: 2
                layout: 'vbox'
                items : [
                    @.cvResearchPortlet1
                    @.cvResearchPortlet2
                    @.cvResearchPortlet3
                ]
            }
        ]
)
