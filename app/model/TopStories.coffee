Ext.define('Cv.model.TopStories',
    extend: 'Ext.data.Model'
    config:
        fields: ['title', 'headLine', 'authorName', 'fileLink', 'OBOPreferredName', 'formatedPubDate']
)

Cv.topStoriesStore = new Ext.data.JsonStore(
    model: 'Cv.model.TopStories',
    data: researchData.store.data.list
)

