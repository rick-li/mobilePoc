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
        itemTpl: '<img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine">{analystName}</div>',
        pinHeaders: true,
        store: cv.videoStore,
        itemCls: 'videolistitem'
      });
      return list;
    }
  });

}).call(this);
