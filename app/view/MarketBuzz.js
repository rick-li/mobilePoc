(function() {

  Ext.define('cv.view.MarketBuzz', {
    extend: 'Ext.Panel',
    config: {
      id: 'cvMarketBuzz',
      layout: {
        type: 'hbox'
      },
      height: 500,
      listeners: [
        {
          event: 'doOrientationChange',
          fn: function(obj) {
            var newPortalItems, orientation;
            console.log('marketBuzz doOrientationChange');
            console.log(obj);
            orientation = cv.util.getOrientation();
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
      if (Ext.os.is.Phone) {
        this.setItems(this.getPhonePortalItems());
      } else {
        orientation = cv.util.getOrientation();
        this.setItems(this.getPortalItems(orientation));
      }
      return this.callParent();
    },
    getPortalItems: function(orientation) {
      console.log('marketBuzz getPortalItems');
      if (orientation === 'landscape') return this.getLandscapeItems();
      return this.getPortraitItems();
    },
    /*
        preCreatePortal: ->
            @.cvResearchPortlet1 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet1',title: 'Daily Research 1'})
            @.cvResearchPortlet2 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet2',title: 'Daily Research 2'})
            @.cvResearchPortlet3 = Ext.create('cv.view.ResearchPortlet',{id: 'cvResearchPortlet3',title: 'Daily Research 3'})
            @.cvVideoPortlet1 = Ext.create('cv.view.VideoPortlet',{id:'cvVideoPortlet1', title: 'CitiVelocity Video 1' })
    */
    getRelatedPortal: function() {
      this.cvResearchPortlet1 = Ext.getCmp('cvResearchPortlet1');
      this.cvResearchPortlet2 = Ext.getCmp('cvResearchPortlet2');
      this.cvResearchPortlet3 = Ext.getCmp('cvResearchPortlet3');
      this.cvVideoPortlet1 = Ext.getCmp('cvVideoPortlet1');
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
      if (this.cvResearchPortlet3) {
        Ext.layout.AbstractBox(this.cvResearchPortlet3, 1);
      } else {
        this.cvResearchPortlet3 = {
          xtype: 'ResearchPortlet',
          flex: 1,
          id: 'cvResearchPortlet3',
          title: 'Daily Research 3'
        };
      }
      if (this.cvVideoPortlet1) {
        return Ext.layout.AbstractBox(this.cvVideoPortlet1, 1);
      } else {
        return this.cvVideoPortlet1 = {
          xtype: 'VideoPortlet',
          flex: 1,
          id: 'cvVideoPortlet1',
          title: 'Video 1'
        };
      }
    },
    getPhonePortalItems: function() {
      console.log('marketBuzz getPhonePortalItems');
      return [
        {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [
            {
              xtype: 'VideoPortlet',
              flex: 1,
              id: 'cvVideoPortlet1',
              title: 'Video 1'
            }, {
              xtype: 'ResearchPortlet',
              flex: 1,
              id: 'cvResearchPortlet1',
              title: 'Daily Research 1'
            }, {
              xtype: 'ResearchPortlet',
              flex: 1,
              id: 'cvResearchPortlet2',
              title: 'Daily Research 2'
            }, {
              xtype: 'ResearchPortlet',
              flex: 1,
              id: 'cvResearchPortlet3',
              title: 'Daily Research 3'
            }
          ]
        }
      ];
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
        }, this.cvResearchPortlet3
      ];
    },
    getPortraitItems: function() {
      console.log('marketBuzz getLandscapeItems');
      this.getRelatedPortal();
      return [
        this.cvVideoPortlet1, {
          xtype: 'panel',
          flex: 2,
          layout: 'vbox',
          items: [this.cvResearchPortlet1, this.cvResearchPortlet2, this.cvResearchPortlet3]
        }
      ];
    }
  });

}).call(this);
