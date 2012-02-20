Ext.define 'Cv.controller.tablet.Main',
    extend: 'Ext.app.Controller'
    config:
        id: 'cvControllerMain'
    init:->
        console.log 'init main controller'
        @callParent()
        Ext.Viewport.on('orientationchange',@onOrientationChange)
    onOrientationChange: (viewport, orientation, width, height)->
        console.log 'Orientation Change: ' + orientation + ";width:" + width + ";height:" + height
        cvMarketBuzz = Ext.getCmp('cvMarketBuzz')
        if cvMarketBuzz
            cvMarketBuzz.fireEvent('doOrientationChange', cvMarketBuzz)
