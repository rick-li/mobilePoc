(function() {
  var renderPage;

  cv.pages = {};

  renderPage = function(pageId) {};

  cv.Page = Ext.extend(Ext.Panel, {
    pageId: '',
    constructor: function(config) {
      this.pageId = config != null ? config.pageId : void 0;
      console.log('constructor pageid ' + this.pageId);
      return cv.Page.superclass.constructor.call(this, config);
    },
    initComponent: function() {
      console.log('init component');
      this.html = '<h1>this is ' + this.pageId + ' Page.';
      return cv.Page.superclass.initComponent.call(this);
    }
  });

}).call(this);
