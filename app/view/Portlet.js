(function() {

  Ext.define('cv.view.Portlet', {
    extend: 'Ext.Panel',
    config: {
      portletType: '',
      title: ''
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
