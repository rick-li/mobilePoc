(function() {

  Ext.define('Cv.controller.TopStories', {
    extend: 'Ext.app.Controller',
    config: {
      routes: {
        'topStories/:docId': 'showDetail'
      }
    },
    showDetail: function(docId) {
      var detail;
      console.log('topStories controller ' + docId);
      if (!this.topStoriesContent) this.topStoriesContent = {};
      if (true) {
        if (!this.topStoriesContent[docId]) {
          detail = this.getDetail(docId);
          if (detail && detail.contentUrl) {
            this.requestContent(docId, detail.contentUrl, detail.title);
          }
        } else {
          this.showContent(docId);
        }
      }
      return null;
    },
    getDetail: function(docId) {
      var itemArray,
        _this = this;
      if (!this.topStoriesItems) this.topStoriesItems = [];
      if (this.topStoriesItems[docId]) {
        return this.topStoriesItems[docId];
      } else {
        itemArray = Cv.topStoriesStore.getData().items;
        itemArray.forEach(function(item, i) {
          if (item.data && item.data.topics) {
            return item.data.topics.forEach(function(t, j) {
              if (t && t.docId) return _this.topStoriesItems[t.docId] = t;
            });
          }
        });
      }
      return this.topStoriesItems[docId];
    },
    requestContent: function(docId, contentUrl, title) {
      var self;
      self = this;
      return Ext.Ajax.request({
        url: contentUrl,
        success: function(response) {
          var text;
          text = response.responseText;
          self.topStoriesContent[docId] = Ext.create('Cv.view.DetailPage', {
            detailContent: text,
            detailTitle: title
          });
          return self.showContent(docId);
        }
      });
    },
    showContent: function(docId) {
      return Ext.getCmp('viewport').setActiveItem(this.topStoriesContent[docId], {
        type: 'slide',
        direction: 'left'
      });
    },
    launch: function() {
      return console.log('launch topStories controller');
    }
  });

}).call(this);
