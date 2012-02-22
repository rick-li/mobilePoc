(function() {

  Ext.define('Cv.view.TopStoriesPortlet', {
    extend: 'Cv.view.Portlet',
    xtype: 'TopStoriesPortlet',
    initialize: function() {
      console.log('initialize top stories');
      this.add(this.createList());
      return this.callParent(arguments);
    },
    createList: function() {
      var list;
      list = Ext.create('Cv.component.DataView', {
        itemTpl: this.getXTemplate,
        store: Cv.topStoriesStore,
        pageSize: 2
      });
      return list;
    },
    getXTemplate: function() {
      return new Ext.XTemplate('<div class="x-container x-toolbar x-docked-top cv-toolbar-blue"><div class="x-inner x-toolbar-inner"></div></div>', '<div class="cv-list-item-headine"><img src=""><div class="headline"></div></div>"></div>', '<div><div class="author"></div><div class="pubdate"></div></div>', '<div><img src=""></img><div class="content"></div></div>');
    }
  });

}).call(this);
