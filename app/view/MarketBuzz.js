(function() {

  Ext.define('cv.view.MarketBuzz', {
    extend: 'Ext.Panel',
    config: {
      id: 'cvMarketBuzz',
      layout: {
        type: 'hbox'
      },
      listeners: [
        {
          event: 'doOrientationChange',
          fn: function(obj) {
            var newPortalItems, orientation;
            console.log('marketBuzz doOrientationChange');
            console.log(obj);
            orientation = Ext.Viewport.determineOrientation();
            console.log(orientation);
            newPortalItems = obj.getPortalItems(orientation);
            obj.removeAll(false, true);
            return obj.setItems(newPortalItems);
          },
          buffer: 500,
          scope: this
        }
      ]
    },
    initialize: function() {
      var orientation;
      console.log('MarketBuzz initialize');
      this.preCreatePortal();
      if (Ext.os.is.Phone) {
        this.setItems(this.getPhonePortalItems());
      } else {
        orientation = Ext.Viewport.determineOrientation();
        this.setItems(this.getPortalItems(orientation));
      }
      return this.callParent();
    },
    preCreatePortal: function() {
      this.cvResearchPortal1 = Ext.create('cv.view.ResearchPortlet', {
        id: 'cvResearchPortal1',
        title: 'Daily Research 1'
      });
      this.cvResearchPortal2 = Ext.create('cv.view.ResearchPortlet', {
        id: 'cvResearchPortal2',
        title: 'Daily Research 2'
      });
      this.cvResearchPortal3 = Ext.create('cv.view.ResearchPortlet', {
        id: 'cvResearchPortal3',
        title: 'Daily Research 3'
      });
      return this.cvVideoPortal1 = Ext.create('cv.view.VideoPortlet', {
        title: 'CitiVelocity Video 1'
      });
    },
    getPhonePortalItems: function() {
      console.log('marketBuzz getPhonePortalItems');
      return [
        {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvVideoPortal1, this.cvResearchPortal1, this.cvResearchPortal2, this.cvResearchPortal3]
        }
      ];
    },
    getPortalItems: function(orientation) {
      console.log('marketBuzz getPortalItems');
      if (orientation === 'landscape') return this.getLandscapeItems();
      return this.getPortraitItems();
    },
    getLandscapeItems: function() {
      return [
        {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvVideoPortal1]
        }, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvResearchPortal1, this.cvResearchPortal2]
        }, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvResearchPortal3]
        }
      ];
    },
    getPortraitItems: function() {
      return [
        {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvVideoPortal1]
        }, {
          xtype: 'panel',
          flex: 2,
          layout: 'vbox',
          items: [this.cvResearchPortal1, this.cvResearchPortal2, this.cvResearchPortal3]
        }
      ];
    },
    getPortlets: function() {
      var result;
      console.log('get portlets');
      result = [];
      result.push(new cv.view.ResearchPortlet({
        title: 'Daily Research',
        height: 200
      }));
      return result;
    }
  });

}).call(this);
