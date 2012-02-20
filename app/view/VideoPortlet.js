(function() {

  Ext.define('cv.view.VideoPortlet', {
    extend: 'cv.view.Portlet',
    xtype: 'VideoPortlet',
    config: {
      layout: 'fit'
    },
    initialize: function() {
      console.log('init video');
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        itemTpl: '<img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine">{analystName}</div><div class="title">{title}</div><div class="pubDate">{formatedDate}</div>',
        pinHeaders: true,
        store: cv.videoStore,
        itemCls: 'videolistitem'
      });
      return list;
    }
  });

}).call(this);
