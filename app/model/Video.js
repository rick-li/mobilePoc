(function() {

  Ext.define('cv.model.Video', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['alertId', 'videoURL', 'imageGroup', 'analystName', 'analystType', 'title', 'formatedDate']
    }
  });

  cv.videoStore = new Ext.data.JsonStore({
    model: 'cv.model.Video',
    data: videoData.list
  });

}).call(this);
