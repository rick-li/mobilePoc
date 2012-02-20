Ext.define('cv.view.MarketBuzz',
    extend: 'Ext.Panel'
    config:
        id: 'cvMarketBuzz'
        layout:
            type: 'hbox'
        height: 500
        listeners: [
            {
                event: 'doOrientationChange'
                fn: (obj) ->
                    console.log 'marketBuzz doOrientationChange'
                    console.log obj
                    #orientation = Ext.Viewport.determineOrientation()
                    orientation = cv.util.getOrientation()
                    console.log orientation
                    newPortalItems = obj.getPortalItems(orientation)
                    obj.removeAll(false, true)
                    obj.setItems(newPortalItems)
                buffer: 500
                scope: this
            }
        ]
    initialize: ->
        console.log 'MarketBuzz initialize'
        if Ext.os.is.Phone
            @setItems(@getPhonePortalItems())
        else
            #@preCreatePortal()
            #orientation = Ext.Viewport.determineOrientation()
            orientation = cv.util.getOrientation()
            @setItems(@getPortalItems(orientation))
        @callParent()
    getPortalItems: (orientation)->
        console.log 'marketBuzz getPortalItems'
        if orientation is 'landscape'
            return @getLandscapeItems()
        return @getPortraitItems()
    ###
    preCreatePortal: ->
        @.cvResearchPortlet1 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet1',title: 'Daily Research 1'})
        @.cvResearchPortlet2 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet2',title: 'Daily Research 2'})
        @.cvResearchPortlet3 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet3',title: 'Daily Research 3'})
        @.cvVideoPortlet1 = Ext.create('cv.view.VideoPortlet',{id:'cvVideoPortlet1', title: 'CitiVelocity Video 1' })
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
    getPhonePortalItems: ->
        console.log 'marketBuzz getPhonePortalItems'
        return [
            {
                xtype: 'panel'
                flex: 1
                layout: 'vbox'
                items : [
                    {xtype:'VideoPortlet',flex: 1, id: 'cvVideoPortlet1', title: 'Video 1'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet1', title: 'Daily Research 1'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet2', title: 'Daily Research 2'}
                    {xtype:'ResearchPortlet',flex: 1, id: 'cvResearchPortlet3', title: 'Daily Research 3'}
                ]
            }
        ]
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
