Ext.define('Cv.model.CmCarousel',
    extend: 'Ext.data.Model'
    config:
        fields: ['title','summary','formatedDate']
)

Cv.cmCarouselStore = new Ext.data.Store(
    model: 'Cv.model.CmCarousel',
    data: cmData.list
)

