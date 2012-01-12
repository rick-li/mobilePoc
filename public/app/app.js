(function() {
  var HomeController, HomeView, Research, ResearchCollection, app,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = {
    activePage: function() {
      return $('.ui-page-active');
    },
    redirectTo: function(page) {
      return $.mobile.changePage(page);
    },
    reapplyStyles: function(el) {
      el.find('ul[data-role]').listview();
      el.find('div[data-role="fieldcontain"]').fieldcontain();
      el.find('button[data-role="button"]').button();
      el.find('input,textarea').textinput();
      return el.page();
    },
    goBack: function() {
      return $.historyBack;
    }
  };

  Research = (function(_super) {

    __extends(Research, _super);

    function Research() {
      Research.__super__.constructor.apply(this, arguments);
    }

    Research.prototype.getHeadLine = function() {
      return this.get('headLine');
    };

    Research.prototype.getPubDate = function() {
      return this.get('pubDate');
    };

    Research.prototype.getFileLink = function() {
      return this.get('fileLink');
    };

    Research.prototype.getSynopsis = function() {
      return this.get('synopsis');
    };

    return Research;

  })(Backbone.Model);

  ResearchCollection = (function(_super) {

    __extends(ResearchCollection, _super);

    ResearchCollection.prototype.model = Research;

    function ResearchCollection() {
      ResearchCollection.__super__.constructor.apply(this, arguments);
      this.reset($RESEARCH_JSON.store.data.list);
    }

    return ResearchCollection;

  })(Backbone.Collection);

  window.Researchs = new ResearchCollection;

  console.log(Researchs);

  /*
  class EditResearchView extends Backbone.View
    constructor: ->
      super
      @el = app.activePage()
      
      @template = _.template('''
      <form action="venue-<%=venue.cid %>-update" method="post">
        <div data-role="fieldcontain">
          <label>Name</label>
          <input type="text" value="<%= venue.getName()%>" name="name" />
        </div>
        <div data-role="fieldcontain">
          <label>State</label>
          <input type="text" value="<%= venue.get('sate')%>" name="name" />
        </div>
        <button type="submit" data-role="button">Save</button>
      </form>
      ''')
      @model.bind 'change', @render
    
      @render()
    events: 
      "submit form" : "onSubmit"
  
  
    onSubmit: (e) ->
      @model.set {
        name : @$("input[name='name']").val(),
        address : @$("input[name='address']").val(),
        city : @$("input[name='city']").val(),
        state : @$("input[name='state']").val()
      }
      @model.trigger('change')
  
      app.goBack()
  
      e.preventDefault
      e.stopPropagation
  
  
    render: =>
      @el.find('h1').text("Editing #{@model.getName()}")
      @el.find('.ui-content').html(@template({venue: @model}))
      
      #rebind events
      @delegateEvents
  */

  HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.render = __bind(this.render, this);      HomeView.__super__.constructor.call(this);
      this.el = app.activePage();
      this.template = _.template('<div>\n<ul data-role="listview" data-theme="c" data-filter="true">\n    <% researches.each(function(research){ %>\n        <li><a href="#researches-<%= research.pubId%>"><%=research.getHeadLine()%></a></li>\n    <%})%>\n</ul>\n</div>');
      console.log('home view render');
      console.log(window.Researchs);
      this.render();
    }

    HomeView.prototype.render = function() {
      this.el.find('.ui-content').html(this.template({
        researches: window.Researchs
      }));
      return app.reapplyStyles(this.el);
    };

    return HomeView;

  })(Backbone.View);

  HomeController = (function(_super) {

    __extends(HomeController, _super);

    HomeController.prototype.routes = {
      "home": "home",
      "researchs-:cid": "show"
    };

    function HomeController() {
      HomeController.__super__.constructor.apply(this, arguments);
      this._views = {};
    }

    HomeController.prototype.home = function() {
      var _base;
      console.log(this._views.home);
      return (_base = this._views).home || (_base.home = new HomeView);
    };

    return HomeController;

  })(Backbone.Router);

  app.homeController = new HomeController;

  $(document).ready(function() {
    Backbone.history.start();
    return app.homeController.home();
  });

  this.app = app;

}).call(this);
