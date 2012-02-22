(function() {

  Ext.define('Cv.controller.Commentary', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        researchList: 'CommentaryPortlet dataview',
        researchBack: '#commentaryBack'
      },
      control: {
        researchList: {
          itemtap: 'redirect'
        },
        researchBack: {
          tap: function() {
            var historyActions, lastAction;
            console.log('commentary back');
            historyActions = Cv.app.getHistory().getActions();
            console.log(historyActions);
            lastAction = historyActions[historyActions.length - 2];
            return this.redirectTo(lastAction.getUrl());
          }
        }
      },
      routes: {
        'commentary/:pubId': 'showDetail'
      }
    },
    redirect: function(list) {
      var pubId;
      pubId = list.getSelection()[0].get('pubId');
      return this.redirectTo('commentary/' + pubId);
    },
    showDetail: function(pubId) {
      var detail, fileLink, fileName, mask, record;
      console.log('commentary controller ' + pubId);
      if (window.device) {
        record = Cv.researchStore.findRecord('pubId', pubId);
        fileLink = record.get('fileLink');
        fileName = fileLink;
        if (fileName.indexOf('/') !== -1) {
          fileName = fileLink.substring(fileLink.lastIndexOf('/') + 1);
        }
        mask = Ext.create('Ext.LoadMask');
        Ext.Viewport.add(mask);
        new Downloader().downloadFile(fileLink, {
          dirName: '/sdcard/cv',
          overwrite: false
        }, function(result) {
          console.log(JSON.stringify(result));
          if (result.progress === 100) {
            mask.destroy();
            return new PdfViewer().play(fileName);
          }
        }, function() {
          mask.destroy();
          return alert('download file ' + fileLink + ' failed.');
        });
        return;
      }
      if (!this.commentaryArticles) this.commentaryArticles = [];
      if (!this.commentaryArticles[pubId]) {
        record = Cv.researchStore.findRecord('pubId', pubId);
        console.log('detail is ');
        this.commentaryArticles[pubId] = Ext.create('Cv.view.ResearchDetail', {
          record: record
        });
      }
      detail = this.commentaryArticles[pubId];
      console.log(detail);
      return Ext.getCmp('viewport').setActiveItem(detail, {
        type: 'slide',
        direction: 'left'
      });
    },
    launch: function() {
      return console.log('launch commentary controller');
    }
  });

}).call(this);
