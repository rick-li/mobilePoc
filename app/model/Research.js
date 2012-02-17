(function() {

  Ext.define('cv.model.Research', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['pubId', 'headLine', 'synopsis', 'fileLink', 'OBOPreferredName', 'formatedPubDate']
    }
  });

  cv.researchStore = new Ext.data.JsonStore({
    model: 'cv.model.Research',
    data: researchData.store.data.list
  });

}).call(this);
