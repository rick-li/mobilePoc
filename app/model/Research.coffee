Ext.define('Cv.model.Research',
    extend: 'Ext.data.Model'
    config:
        fields: ['pubId', 'headLine', 'synopsis', 'fileLink', 'OBOPreferredName', 'formatedPubDate']
        pageSize: 5
)

Cv.researchStore = new Ext.data.JsonStore(
    model: 'Cv.model.Research',
    data: researchTestData.store.data.list
)

