Ext.define('Cv.view.CitiMinute',
    extend: 'Cv.view.Portlet'
    xtype: 'CitiMinute'
    config:
        #layout: 'fit'
        height: 280
        
    initialize: ->
        console.log 'Carousel init'
        @add(
            {
                xtype: 'cvCarousel'
                direction: 'horizontal'
                items: @getCrls()
                id : 'cmCrls'
                listeners: 
                    tap :->
                        console.log 'tap'
                #listeners:
                    #afterRender: (c)->
                        #c.items.each(
                            #(item)->
                                #item.el.on('tap',
                                #->
                                    #console.log item.id
                                
                                #)
                        #)
            }
        )
        @callParent()
        
        
    getCrls: ->
        console.log 'get Carousel'
        list = cmData.list
        imgs = ["cm1", "cm2","Citi_Minute_Horizontal_480x262"]
        #titles = ['Emerging Markets Daily: Latin America Edition','Norway: Annual Address: No Policy Signals, Balanced Tone']
        #dates = ['08 Feb 12 03:54','01 Dec 11 21:44']
        i = 0
        ln = cmData.size
        items = []
        while i < ln
            img = imgs[i]
            title = list[i].title
            date = list[i].formatedDate
            id = list[i].alertId
            items.push
                xtype: 'panel'
                layout: 'vbox'
                cls: 'cm-container'
                id: id
                items:  [
                    {
                        xtype: "image"
                        flex: '3.5'
                        cls: "my-carousel-item-img"
                        src: "resources/images/" + img + ".png"
                    },
                    {
                        dock: 'bottom'
                        html: '<div>'+title+'</div><div>'+date+'</div>'
                        flex: '1'
                        cls: 'cm-carousel-text'
                    }
                ]
            i++
        console.log 'Carousel items'+items
        console.log items
        return items
)