(function() {
  var renderPage;

  cv.pages = {};

  cv.portlets = {};

  renderPage = function(pageId) {};

  cv.Page = Ext.extend(Ext.Panel, {
    pageId: '',
    constructor: function(config) {
      this.pageId = config != null ? config.pageId : void 0;
      console.log('constructor pageid ' + this.pageId);
      return cv.Page.superclass.constructor.call(this, config);
    },
    initComponent: function() {
      var portlets;
      console.log('init component');
      if (this.pageId !== 'MarketBuzz') {
        this.html = '<h1>this is ' + this.pageId + ' Page.';
      } else {
        portlets = this.getPortlets();
        Ext.apply(this, {
          items: portlets,
          align: 'stretch',
          scroll: 'vertical'
        });
      }
      return cv.Page.superclass.initComponent.call(this);
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
