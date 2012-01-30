(function() {

  cv.Portlet = Ext.extend(Ext.Panel, {
    portletType: '',
    title: '',
    initComponent: function() {
      cv.Portlet.superclass.initComponent.call(this);
      return this.addDocked({
        xtype: 'toolbar',
        title: this.title
      });
    }
  });

}).call(this);
