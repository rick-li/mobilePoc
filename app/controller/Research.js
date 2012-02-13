(function() {

  Ext.define('cv.controller.Research', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        researchList: '#researchPortlet list',
        researchBack: '#researchBack'
      },
      control: {
        researchList: {
          itemtap: 'redirect'
        },
        researchBack: {
          tap: function() {
            var historyActions, lastAction;
            console.log('research back');
            historyActions = cv.app.getHistory().getActions();
            console.log(historyActions);
            lastAction = historyActions[historyActions.length - 2];
            return this.redirectTo(lastAction.getUrl());
          }
        }
      },
      routes: {
        'research/:pubId': 'showDetail'
      }
    },
    redirect: function(list) {
      var pubId;
      pubId = list.getSelection()[0].get('pubId');
      return this.redirectTo('research/' + pubId);
    },
    showDetail: function(pubId) {
      var detail, record;
      console.log('research controller ' + pubId);
      if (!this.researchArticles) this.researchArticles = [];
      if (!this.researchArticles[pubId]) {
        record = cv.researchStore.findRecord('pubId', pubId);
        console.log('detail is ');
        this.researchArticles[pubId] = Ext.create('cv.view.ResearchDetail', {
          record: record
        });
      }
      detail = this.researchArticles[pubId];
      console.log(detail);
      return Ext.getCmp('viewport').setActiveItem(detail, {
        type: 'slide',
        direction: 'left'
      });
    },
    launch: function() {
      return console.log('launch research controller');
    }
  });

}).call(this);
