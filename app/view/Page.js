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
      console.log('init Page');
      if (this.getPageId() !== 'MarketBuzz') {
        this.setHtml('<h1>this is ' + this.getPageId() + ' Page.');
      } else {
        this.setItems([Ext.create('cv.view.MarketBuzz')]);
      }
      return this.callParent(arguments);
    },
    getPortlets: function() {
      var result;
      console.log('get portlets');
      result = [];
      result.push(new cv.view.VideoPortlet({
        title: 'CitiVelocity Video'
      }));
      return result;
    }
  });

}).call(this);
