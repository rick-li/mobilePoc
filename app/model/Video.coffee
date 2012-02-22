Ext.define('Cv.model.Video',
    extend: 'Ext.data.Model'
    config:
        fields: ['alertId', 'videoURL', 'imageGroup', 'analystName','analystType','title','formatedDate']
)

Cv.videoStore = new Ext.data.JsonStore(
    model: 'Cv.model.Video',
    data: videoData.list
)

