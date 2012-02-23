(function() {

  Ext.define('Cv.view.VideoDetail', {
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
          title: this.getRecord().get('analystName'),
          items: [
            {
              text: 'Back',
              id: 'detailBack'
            }
          ]
        }, {
          tpl: '{analystType}',
          data: this.getRecord().getData(),
          styleHtmlContent: true
        }, {
          tpl: '{videoURL}',
          items: [
            {
              xtype: 'video',
              url: 'http://broken-links.com/tests/media/BigBuck.m4v',
              loop: true,
              width: 200,
              height: 200,
              posterUrl: ''
            }
          ]
        }
      ]);
      return this.callParent(arguments);
    }
  });

}).call(this);
