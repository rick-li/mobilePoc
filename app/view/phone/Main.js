(function() {

  Ext.define("Cv.view.phone.Main", {
    extend: 'Cv.view.Main',
    initialize: function() {
      console.log('main phone init');
      return this.callParent();
    },
    getSubItems: function() {
      var overlay, subItems;
      overlay = new Ext.Panel({
        styleHtmlContent: true,
        docked: 'bottom',
        modal: true,
        cls: 'overlay_panel',
        hideOnMaskTap: true,
        items: [
          {
            xtype: 'searchfield',
            name: 'searchfield',
            cls: 'phone_searchfield',
            placeholder: 'Search...'
          }, {
            xtype: 'button',
            docked: 'right',
            text: 'Cancel',
            style: 'margin-left:70px;font-size:14px;font-weight:bold;font:arial,sans-serif;',
            listeners: {
              tap: function(button) {
                return overlay.hide();
              }
            }
          }
        ]
      });
      subItems = [
        {
          cls: 'phoneSearchIcon',
          docked: 'right',
          listeners: {
            tap: function(button) {
              console.log('tap main');
              console.log(overlay);
              return overlay.showBy(button);
            }
          }
        }
      ];
      subItems.push({
        xtype: 'image',
        centered: true,
        src: 'resources/images/cv-logo-header-medium.png',
        minWidth: 172,
        minHeight: 22
      });
      return subItems;
    }
  });

}).call(this);
