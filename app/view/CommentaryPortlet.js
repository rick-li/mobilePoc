(function() {

  Ext.define('Cv.view.CommentaryPortlet', {
    extend: 'Cv.view.Portlet',
    xtype: 'CommentaryPortlet',
    config: {
      layout: 'fit'
    },
    initialize: function() {
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = Ext.create('Ext.DataView', {
        baseCls: Ext.baseCSSPrefix + 'list',
        cls: 'cv-dataview',
        itemTpl: '<div class="cv-list-item-content"><div class="cv-list-item-download"><div class="headLine">{headLine}</div></div><div><div class="author">{OBOPreferredName}</div><div class="pubDate">{formatedPubDate}</div></div><div class="content">{synopsis}</div></div>',
        itemCls: 'cv-list-item',
        store: Cv.researchStore,
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
