Ext.define('Cv.view.CmCarousel',
    extend: 'Cv.view.Portlet'
    xtype: 'CmCarousel'
    config:
        layout: 'fit'
        height: 280
        
    initialize: ->
        console.log 'Carousel init'
        @add(
            {
                xtype: 'carousel'
                direction: 'horizontal'
                items: @getCrls()
                #tpl: '<div>title</div>'
                #html: '<div>title</div>'
            }
        )
        @callParent()
        
        
    getCrls: ->
        console.log 'get Carousel'
        imgs = ["cm1", "cm2"]
        i = 0
        ln = imgs.length
        items = []
        while i < ln
            img = imgs[i]
            items.push
                xtype: "image"
                cls: "my-carousel-item-img"
                src: "resources/images/" + img + ".png"
            i++
        console.log 'Carousel items'+items
        console.log items
        return items
)