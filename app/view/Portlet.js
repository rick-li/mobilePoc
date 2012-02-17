(function() {

  Ext.define('cv.view.Portlet', {
    extend: 'Ext.Panel',
    config: {
      portletType: '',
      title: '',
      layout: 'fit'
    },
    initialize: function() {
      this.add({
        docked: 'top',
        xtype: 'toolbar',
        title: this.getTitle()
      });
      return this.callParent(arguments);
    }
  });

}).call(this);
