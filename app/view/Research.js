(function() {

  Ext.define('cv.view.ResearchPortlet', {
    extend: 'cv.view.Portlet',
    config: {
      height: 200
    },
    initialize: function() {
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = new Ext.List({
        height: this.getHeight(),
        itemTpl: '<div>{headLine}</div><div>{synopsis}</div>',
        store: cv.researchStore
      });
      return list;
    }
  });

}).call(this);
