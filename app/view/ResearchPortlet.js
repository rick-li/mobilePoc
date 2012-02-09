(function() {

  Ext.define('cv.view.ResearchPortlet', {
    extend: 'cv.view.Portlet',
    config: {
      id: 'researchPortlet',
      height: 100,
      xtype: 'researchPortlet'
    },
    initialize: function() {
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        height: this.getHeight(),
        itemTpl: '<div class="headLine">{headLine}</div><div class="synopsis">{synopsis}</div>',
        store: cv.researchStore
      });
      return list;
    }
  });

}).call(this);
