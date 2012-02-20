(function() {
  var renderPage;

  renderPage = function(pageId) {};

  Ext.define('Cv.view.Page', {
    extend: 'Ext.Panel',
    config: {
      pageId: '',
      scrollable: 'vertical'
    }
    /*
        constructor: (config)->
            @pageId = config?.pageId
            console.log 'constructor pageid '+@pageId
            Cv.Page.superclass.constructor.call(this, config)
        initialize: ->
            console.log 'init Page'
            if @getPageId() != 'MarketBuzz'
                @setHtml  '<h1>this is '+@getPageId()+ ' Page.'
            else
                #read json and render the portlets
                #portlets = @getPortlets()
                @.setItems([Ext.create('Cv.view.MarketBuzz')])
            @callParent(arguments)
    */
  });

}).call(this);
