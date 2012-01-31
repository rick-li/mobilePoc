(function() {

  cv.VideoPortlet = Ext.extend(cv.Portlet, {
    height: 300,
    initComponent: function() {
      this.items = [
        {
          xtype: 'video',
          posterUrl: 'videoposter.png',
          url: 'http://dev.sencha.com/deploy/touch/examples/video/space.mp4',
          height: 200,
          width: 200
        }
      ];
      return cv.VideoPortlet.superclass.initComponent.call(this);
    }
  });

}).call(this);
