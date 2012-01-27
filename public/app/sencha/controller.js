(function() {

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
    return map.connect(':controller/:action');
  });

}).call(this);
