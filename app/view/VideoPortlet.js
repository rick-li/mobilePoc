(function() {

  Ext.define('Cv.view.VideoPortlet', {
    extend: 'Cv.view.Portlet',
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
      list = Ext.create('Ext.DataView', {
        baseCls: Ext.baseCSSPrefix + 'list',
        cls: 'cv-dataview',
        itemTpl: '<div class="cv-list-item-content"><img style="float:left;" src="resources/img/ana_demo.jpg"><div class="headLine" style="padding-left:3px !important;">{analystName}</div><div class="title">{title}</div><div class="pubDate">{formatedDate}</div></div>',
        store: Cv.videoStore,
        itemCls: 'cv-list-item',
        scrollable: {
          direction: 'vertical',
          directionLock: true
        },
        scrollToTopOnRefresh: false
      });
      return list;
    }
  });

}).call(this);
