(function() {
  var renderPage;

  renderPage = function(pageId) {};

  Ext.define('cv.view.Page', {
    extend: 'Ext.Panel',
    config: {
      pageId: ''
    },
    /*
        constructor: (config)->
            @pageId = config?.pageId
            console.log 'constructor pageid '+@pageId
            cv.Page.superclass.constructor.call(this, config)
    */
    initialize: function() {
      console.log('init Page');
      this.setHtml('<h1>this is ' + this.getPageId() + ' Page.');
      /*
              else
                  #read json and render the portlets
                  portlets = @getPortlets()
                  #portlets = []
                  Ext.apply(this,
                      items: portlets
                      #layout: 'vbox'
                      #align: 'stretch'
                      scroll: 'vertical'
                  )
      */
      return this.callParent(arguments);
    },
    getPortlets: function() {
      var result;
      console.log('get portlets');
      result = [];
      result.push(new cv.ResearchPortlet({
        title: 'Daily Research'
      }));
      result.push(new cv.ResearchPortlet({
        title: 'Daily Research'
      }));
      result.push(new cv.ResearchPortlet({
        title: 'Daily Research'
      }));
      result.push(new cv.VideoPortlet({
        title: 'CitiVelocity Video'
      }));
      return result;
    }
  });

}).call(this);
