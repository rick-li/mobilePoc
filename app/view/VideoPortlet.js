(function() {

  Ext.define('cv.view.VideoPortlet', {
    extend: 'cv.view.Portlet',
    config: {
      id: 'VideoPortlet',
      height: 200,
      xtype: 'VideoPortlet'
    },
    initialize: function() {
      console.log('init video');
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        pinHeaders: true,
        itemTpl: '<img style="float:left;" src="public/app/libs/resources/images/video_head.jpg"><div class="" style="font-size:20px;">{analystName}</div><div class="">{analystType}</div>',
        store: cv.videoStore
      });
      return list;
    }
  });

}).call(this);
