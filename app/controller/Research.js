(function() {

  Ext.define('Cv.controller.Research', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        researchList: 'ResearchPortlet dataview'
      },
      control: {
        researchList: {
          itemtap: 'redirect'
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
      var detail, fileLink, fileName, mask, record;
      console.log('research controller ' + pubId);
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
      if (!this.researchArticles) this.researchArticles = [];
      if (!this.researchArticles[pubId]) {
        record = Cv.researchStore.findRecord('pubId', pubId);
        console.log('detail is ');
        this.researchArticles[pubId] = Ext.create('Cv.view.ResearchDetail', {
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
