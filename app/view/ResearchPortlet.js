(function() {

  Ext.define('Cv.view.ResearchPortlet', {
    extend: 'Cv.view.Portlet',
    xtype: 'ResearchPortlet',
    config: {
      layout: 'fit'
    },
    initialize: function() {
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        itemTpl: '<div class="headLine">{headLine}</div><div><div class="author">{OBOPreferredName}</div><div class="pubDate">{formatedPubDate}</div></div><div class="content">{synopsis}</div>',
        itemCls: 'listitem',
        store: Cv.researchStore,
        pinHeaders: true
      });
      return list;
    }
  });

}).call(this);
