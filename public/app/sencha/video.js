(function() {

  cv.VideoPortlet = Ext.extend(cv.Portlet, {
    height: 300,
    initComponent: function() {
      this.items = [
        {
          xtype: 'video',
          posterUrl: 'videoposter.png',
          url: 'http://broken-links.com/tests/media/BigBuck.m4v',
          preload: false,
          height: 300,
          width: 200
        }
      ];
      return cv.VideoPortlet.superclass.initComponent.call(this);
    }
  });

}).call(this);
