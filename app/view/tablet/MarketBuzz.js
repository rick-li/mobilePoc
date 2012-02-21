(function() {

  Ext.define('Cv.view.tablet.MarketBuzz', {
    extend: 'Cv.view.MarketBuzz',
    config: {
      id: 'cvTabletMarketBuzz',
      listeners: [
        {
          event: 'doOrientationChange',
          fn: function(obj) {
            var newPortalItems, orientation;
            console.log('marketBuzz doOrientationChange');
            console.log(obj);
            orientation = Cv.util.getOrientation();
            console.log(orientation);
            newPortalItems = obj.getTabletItems(orientation);
            obj.removeAll(false, true);
            return obj.setItems(newPortalItems);
          },
          buffer: 500,
          scope: this
        }
      ]
    },
    getPortletItems: function() {
      var orientation;
      console.log('marketBuzz getPortletItems');
      orientation = Cv.util.getOrientation();
      return this.getTabletItems(orientation);
    },
    getTabletItems: function(orientation) {
      console.log('marketBuzz getPortalItems');
      if (orientation === 'landscape') return this.getLandscapeItems();
      return this.getPortraitItems();
    },
    /*
        preCreatePortal: ->
            @.cvResearchPortlet1 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet1',title: 'Daily Research 1'})
            @.cvResearchPortlet2 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet2',title: 'Daily Research 2'})
            @.cvResearchPortlet3 = Ext.create('Cv.view.ResearchPortlet',{id: 'cvResearchPortlet3',title: 'Daily Research 3'})
            @.cvVideoPortlet1 = Ext.create('Cv.view.VideoPortlet',{id:'cvVideoPortlet1', title: 'CitiVelocity Video 1' })
    */
    getRelatedPortal: function() {
      this.cvResearchPortlet1 = Ext.getCmp('cvResearchPortlet1');
      this.cvResearchPortlet2 = Ext.getCmp('cvResearchPortlet2');
      this.cvResearchPortlet3 = Ext.getCmp('cvResearchPortlet3');
      this.cvVideoPortlet1 = Ext.getCmp('cvVideoPortlet1');
      this.cvCarousel = Ext.getCmp('cvCarousel');
      if (this.cvResearchPortlet1) {
        Ext.layout.AbstractBox(this.cvResearchPortlet1, 1);
      } else {
        this.cvResearchPortlet1 = {
          xtype: 'ResearchPortlet',
          flex: 1,
          id: 'cvResearchPortlet1',
          title: 'Daily Research 1'
        };
      }
      if (this.cvResearchPortlet2) {
        Ext.layout.AbstractBox(this.cvResearchPortlet2, 1);
      } else {
        this.cvResearchPortlet2 = {
          xtype: 'ResearchPortlet',
          flex: 1,
          id: 'cvResearchPortlet2',
          title: 'Daily Research 2'
        };
      }
      if (this.cvVideoPortlet1) {
        Ext.layout.AbstractBox(this.cvVideoPortlet1, 1);
      } else {
        this.cvVideoPortlet1 = {
          xtype: 'VideoPortlet',
          flex: 1,
          id: 'cvVideoPortlet1',
          title: 'Video 1'
        };
      }
      if (this.cvCarousel) {
        return Ext.layout.AbstractBox(this.cvCarousel, 1);
      } else {
        return this.cvCarousel = {
          xtype: 'CmCarousel',
          flex: 1,
          id: 'cvCarousel',
          title: 'Citi Minute'
        };
      }
    },
    getLandscapeItems: function() {
      console.log('marketBuzz getLandscapeItems');
      this.getRelatedPortal();
      return [
        this.cvVideoPortlet1, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvResearchPortlet1, this.cvResearchPortlet2]
        }, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvCarousel]
        }
      ];
    },
    getPortraitItems: function() {
      console.log('marketBuzz getLandscapeItems');
      this.getRelatedPortal();
      return [
        {
          xtype: 'panel',
          flex: 2,
          layout: 'vbox',
          items: [this.cvCarousel, this.cvVideoPortlet1]
        }, {
          xtype: 'panel',
          flex: 2,
          layout: 'vbox',
          items: [this.cvResearchPortlet1, this.cvResearchPortlet2]
        }
      ];
    }
  });

}).call(this);
