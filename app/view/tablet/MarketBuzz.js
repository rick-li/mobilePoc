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
    getRelatedPortal: function() {
      this.cvResearchPortlet = Ext.getCmp('cvResearchPortlet');
      this.cvVideoPortlet = Ext.getCmp('cvVideoPortlet');
      this.citiMinute = Ext.getCmp('citiMinute');
      this.cvTopStoriesPortlet = Ext.getCmp('cvTopStoriesPortlet');
      this.cvCommentary = Ext.getCmp('cvCommentary');
      if (this.cvResearchPortlet) {
        Ext.layout.AbstractBox(this.cvResearchPortlet, 1);
      } else {
        this.cvResearchPortlet = {
          xtype: 'ResearchPortlet',
          flex: 1,
          id: 'cvResearchPortlet',
          title: 'Daily Research'
        };
      }
      if (this.cvCommentary) {
        Ext.layout.AbstractBox(this.cvCommentary, 1);
      } else {
        this.cvCommentary = {
          xtype: 'CommentaryPortlet',
          flex: 1,
          id: 'cvCommentary',
          title: 'Daily Commentary'
        };
      }
      if (this.cvVideoPortlet) {
        Ext.layout.AbstractBox(this.cvVideoPortlet, 1);
      } else {
        this.cvVideoPortlet = {
          xtype: 'VideoPortlet',
          flex: 1,
          id: 'cvVideoPortlet',
          title: 'Citi Velocity Video'
        };
      }
      if (this.citiMinute) {
        Ext.layout.AbstractBox(this.citiMinute, 1);
      } else {
        this.citiMinute = {
          xtype: 'CitiMinute',
          flex: 1,
          id: 'citiMinute',
          title: 'Citi Minute'
        };
      }
      if (this.cvTopStoriesPortlet) {
        return Ext.layout.AbstractBox(this.cvTopStoriesPortlet, 1);
      } else {
        return this.cvTopStoriesPortlet = {
          xtype: 'TopStoriesPortlet',
          flex: 1,
          id: 'cvTopStoriesPortlet',
          title: 'Top Stories'
        };
      }
    },
    getLandscapeItems: function() {
      console.log('marketBuzz getLandscapeItems');
      this.getRelatedPortal();
      return [
        this.cvTopStoriesPortlet, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.cvResearchPortlet, this.cvCommentary]
        }, {
          xtype: 'panel',
          flex: 1,
          layout: 'vbox',
          items: [this.citiMinute, this.cvVideoPortlet]
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
          items: [this.cvTopStoriesPortlet, this.cvCommentary]
        }, {
          xtype: 'panel',
          flex: 2,
          layout: 'vbox',
          items: [this.cvResearchPortlet, this.citiMinute, this.cvVideoPortlet]
        }
      ];
    }
  });

}).call(this);
