(function() {

  Ext.define('Cv.view.ResearchDetail', {
    extend: 'Ext.Panel',
    config: {
      record: ''
    },
    initialize: function() {
      console.log('initialize detail');
      console.log(this.getRecord());
      this.setItems([
        {
          xtype: 'toolbar',
          title: {
            xtype: 'title',
            title: this.getRecord().get('headLine')
          },
          items: [
            {
              text: 'Back',
              id: 'detailBack'
            }
          ]
        }, {
          tpl: '{synopsis}',
          data: this.getRecord().getData(),
          styleHtmlContent: true
        }
      ]);
      return this.callParent(arguments);
    }
  });

}).call(this);
