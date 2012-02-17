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
        height: this.getHeight(),
        itemTpl: '<img style="float:left;" src="public/app/libs/resources/images/video_head.jpg"><div class="headLine">{analystName}</div><div class="content">{analystType}</div>',
        store: cv.videoStore,
        itemCls: 'listitem'
      });
      return list;
    }
  });

}).call(this);
