(function() {

  Ext.define('Cv.view.DetailPage', {
    extend: 'Ext.Panel',
    config: {
      detailContent: '',
      detailTitle: ''
    },
    initialize: function() {
      console.log('initialize DetailPage');
      this.setItems([
        {
          xtype: 'toolbar',
          title: this.getDetailTitle(),
          items: [
            {
              text: 'Back',
              id: 'detailBack',
              ui: 'back'
            }
          ]
        }, {
          xtype: 'panel',
          html: this.getDetailContent()
        }
      ]);
      return this.callParent(arguments);
    }
  });

}).call(this);
