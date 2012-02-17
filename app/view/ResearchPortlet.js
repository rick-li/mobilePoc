(function() {

  Ext.define('cv.view.ResearchPortlet', {
    extend: 'cv.view.Portlet',
    xtype: 'research',
    config: {
      id: 'researchPortlet',
      height: 200,
      layout: 'fit'
    },
    initialize: function() {
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        itemTpl: '<div class="headLine">{headLine}</div><div class="synopsis">{synopsis}</div>',
        store: cv.researchStore,
        pinHeaders: true
      });
      return list;
    }
  });

}).call(this);
