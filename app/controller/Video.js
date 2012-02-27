(function() {

  Ext.define('Cv.controller.Video', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        videoList: 'VideoPortlet dataview'
      },
      control: {
        videoList: {
          select: 'redirect'
        }
      },
      routes: {
        'video/:alertId': 'showDetail'
      }
    },
    redirect: function(list) {
      var alertId;
      alertId = list.getSelection()[0].get('alertId');
      console.log('list' + list);
      return this.redirectTo('video/' + alertId);
    },
    showDetail: function(alertId) {
      var detail, record;
      console.log('video controller ' + alertId);
      if (window.device) {
        new VideoPlayer().play("http://broken-links.com/tests/media/BigBuck.m4v");
      } else {
        if (!this.videoResources) this.videoResources = [];
        if (!this.videoResources[alertId]) {
          record = Cv.videoStore.findRecord('alertId', alertId);
          console.log('detail is ');
          detail = this.videoResources[alertId] = Ext.create('Cv.view.VideoDetail', {
            record: record
          });
          console.log(detail);
        }
      }
      return Ext.getCmp('viewport').setActiveItem(detail, {
        type: 'slide',
        direction: 'left'
      });
    },
    launch: function() {
      return console.log('launch video controller');
    }
  });

}).call(this);
