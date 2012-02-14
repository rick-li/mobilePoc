(function() {
  var renderPage;

  renderPage = function(pageId) {};

  Ext.define('cv.view.Page', {
    extend: 'Ext.Panel',
    config: {
      pageId: '',
      scrollable: 'vertical'
    },
    /*
        constructor: (config)->
            @pageId = config?.pageId
            console.log 'constructor pageid '+@pageId
            cv.Page.superclass.constructor.call(this, config)
    */
    initialize: function() {
      var portlets;
      console.log('init Page');
      if (this.getPageId() !== 'MarketBuzz') {
        this.setHtml('<h1>this is ' + this.getPageId() + ' Page.');
      } else {
        portlets = this.getPortlets();
        this.setItems(portlets);
      }
      return this.callParent(arguments);
    },
    getPortlets: function() {
      var result;
      console.log('get portlets');
      result = [];
      result.push(new cv.view.ResearchPortlet({
        title: 'Daily Research',
        height: 200
      }));
      result.push(new cv.view.VideoPortlet({
        title: 'CitiVelocity Video'
      }));
      return result;
    }
  });

}).call(this);
