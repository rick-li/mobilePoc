(function() {

  cv.Menu = Ext.extend(Ext.Toolbar, {
    height: 40,
    itemId: 'cvMenu',
    layout: 'fit',
    scroll: 'horizontal',
    initComponent: function() {
      Ext.apply(this, {
        items: [
          {
            id: 'menuBarButtons',
            itemId: 'menuBarButtons',
            xtype: 'segmentedbutton',
            items: this.getMenuItems()
          }
        ]
      });
      return cv.Menu.superclass.initComponent.apply(this, arguments);
    },
    getMenuItems: function() {
      var menuItems, menus,
        _this = this;
      menus = ['MarketBuzz', 'Rates', 'Credit', 'FX', 'EmergeMarkets', 'Muni'];
      menuItems = [];
      menus.forEach(function(page, i) {
        menuItems.push({
          id: page,
          text: page,
          handler: _this.menuTapHandler
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

  Ext.reg('cvMenu', cv.Menu);

}).call(this);
