(function() {

  Ext.define('cv.controller.Video', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        videoList: '#VideoPortlet list',
        videoBack: '#videoBack'
      },
      control: {
        videoList: {
          select: 'redirect'
        },
        videoBack: {
          tap: function() {
            var historyActions, lastAction;
            console.log('video back');
            historyActions = cv.app.getHistory().getActions();
            console.log(historyActions);
            lastAction = historyActions[historyActions.length - 2];
            return this.redirectTo(lastAction.getUrl());
          }
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
          record = cv.videoStore.findRecord('alertId', alertId);
          console.log('detail is ');
          detail = this.videoResources[alertId] = Ext.create('cv.view.VideoDetail', {
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
