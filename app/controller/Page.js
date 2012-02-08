
/*
Ext.define 'cv.controller.Research',
    extends: 'Ext.app.Controller'
    detail: (options)->
        pubId = options.pubId
        console.log('research controller '+pubId)
        if not @researchArticles
            @researchArticles = []
        if not @researchArticles[pubId]
            record = cv.researchStore.findRecord('pubId', pubId)
            console.log 'record is '
            @researchArticles[pubId] = new cv.ResearchDetail({record: record})
        Ext.getCmp('viewport').setActiveItem(@researchArticles[pubId], {type: 'slide', direction: 'left'})
*/

(function() {

  Ext.define('cv.controller.Page', {
    extend: 'Ext.app.Controller',
    config: {
      pages: {},
      refs: {
        menuBtn: '#menuBarButtons button'
      },
      control: {
        menuBtn: {
          tap: 'redirect'
        }
      },
      routes: {
        'page/:pageId': 'switchPage'
      }
    },
    redirect: function(menuBtn) {
      console.log(menuBtn);
      return this.redirectTo('page/' + menuBtn.getId());
    },
    switchPage: function(pageId) {
      var activeMenuBtn, menuBar, pages;
      console.log('page index id: ' + pageId);
      pages = this.getPages();
      if (!pages[pageId]) {
        pages[pageId] = new cv.view.Page({
          pageId: pageId
        });
      }
      menuBar = Ext.getCmp('menuBarButtons');
      activeMenuBtn = menuBar.child('#' + pageId);
      menuBar.setPressedButtons(activeMenuBtn);
      return Ext.getCmp('viewport').setActiveItem(pages[pageId], {
        type: 'slide',
        direction: 'right'
      });
    },
    launch: function() {
      return console.log('launch controller');
    }
  });

}).call(this);
