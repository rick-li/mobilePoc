(function() {

  Ext.define('cv.view.Portlet', {
    extend: 'Ext.Panel',
    config: {
      portletType: '',
      title: '',
      cls: 'portal',
      layout: 'fit'
    },
    initialize: function() {
      this.add({
        docked: 'top',
        xtype: 'toolbar',
        title: this.getTitle(),
        cls: 'portalTitle'
      });
      return this.callParent(arguments);
    }
  });

}).call(this);
