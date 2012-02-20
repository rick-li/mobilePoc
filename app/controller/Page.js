(function() {

  Ext.define('Cv.controller.Page', {
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
        if (pageId === 'MarketBuzz') {
          pages[pageId] = this.createMarketBuzz(pageId);
        } else {
          pages[pageId] = Ext.create('Cv.view.Page', {
            pageId: pageId,
            html: "It's " + pageId + " page."
          });
        }
      }
      menuBar = Ext.getCmp('menuBarButtons');
      activeMenuBtn = menuBar.child('#' + pageId);
      menuBar.setPressedButtons(activeMenuBtn);
      return Ext.getCmp('viewport').setActiveItem(pages[pageId], {
        type: 'slide',
        direction: 'right'
      });
    },
    createMarketBuzz: function(pageId) {},
    launch: function() {
      return console.log('launch Page controller');
    }
  });

}).call(this);
