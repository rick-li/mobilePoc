(function() {

  Ext.define('cv.view.Menu', {
    extend: 'Ext.Toolbar',
    config: {
      height: 40,
      scrollable: 'horizontal'
    },
    initialize: function() {
      this.setItems([
        {
          id: 'menuBarButtons',
          itemId: 'menuBarButtons',
          xtype: 'segmentedbutton',
          items: this.getMenuItems()
        }
      ]);
      return this.callParent(arguments);
    },
    getMenuItems: function() {
      var menuItems, menus,
        _this = this;
      menus = ['MarketBuzz', 'Rates', 'Credit', 'FX', 'EmergeMarkets', 'Muni'];
      menuItems = [];
      menus.forEach(function(page, i) {
        menuItems.push({
          id: page,
          text: page
        });
        return menuItems[0]['pressed'] = true;
      });
      console.log(menuItems);
      return menuItems;
    },
    menuTapHandler: function(button, e) {
      console.log(button.text + ' ' + button.id + ' is clicked');
      return Ext.dispatch({
        controller: 'page',
        action: 'index',
        id: button.id,
        historyUrl: 'page/index/' + button.id
      });
    }
  });

}).call(this);
