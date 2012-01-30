(function() {

  Ext.regController('research', {
    detail: function(options) {
      var pubId, record;
      pubId = options.pubId;
      console.log('research controller ' + pubId);
      if (!this.researchArticles) this.researchArticles = [];
      if (!this.researchArticles[pubId]) {
        record = cv.researchStore.findRecord('pubId', pubId);
        console.log('record is ');
        this.researchArticles[pubId] = new cv.ResearchDetail({
          record: record
        });
      }
      return Ext.getCmp('viewport').setActiveItem(this.researchArticles[pubId], {
        type: 'slide',
        direction: 'left'
      });
    }
  });

  Ext.regController('page', {
    index: function(options) {
      var pageId;
      pageId = options.id;
      console.log('page index id: ' + options.id);
      if (!cv.pages[pageId]) {
        cv.pages[pageId] = new cv.Page({
          pageId: pageId
        });
      }
      Ext.getCmp('menuBarButtons').setPressed(Ext.getCmp(pageId), true, false);
      return Ext.getCmp('viewport').setActiveItem(cv.pages[pageId], {
        type: 'slide',
        direction: 'right'
      });
    }
  });

  Ext.Router.draw(function(map) {
    map.connect('page/index/:id', {
      controller: 'page',
      action: 'index'
    });
    map.connect('research/:category/:pubId', {
      controller: 'research',
      action: 'detail'
    });
    return map.connect(':controller/:action');
  });

}).call(this);
