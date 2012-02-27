(function() {

  Ext.define('Cv.model.TopStories', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['title', 'topics']
    }
  });

  Cv.topStoriesStore = new Ext.data.JsonStore({
    model: 'Cv.model.TopStories',
    data: topStoriesTestData
  });

}).call(this);
