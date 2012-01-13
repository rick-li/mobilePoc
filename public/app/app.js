(function() {
  var HomeView, Research, ResearchCollection, ShowResearchView, app,
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
      console.log('Im in constructor');
      console.log(app.activePage());
      console.log($('.ui-page-active'));
      this.el = app.activePage();
      this.template = _.template('<div>\n<ul data-role="listview" data-theme="c" data-filter="true">\n    <% researches.each(function(research){ %>\n        <!--<li><a href="index.html"><%=research.getHeadLine()%></a></li>-->\n        <li><a href="#research?cid=<%= research.cid%>"><%=research.getHeadLine()%></a></li>\n    <%})%>\n</ul>\n</div>');
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

  ShowResearchView = (function(_super) {

    __extends(ShowResearchView, _super);

    function ShowResearchView() {
      this.render = __bind(this.render, this);      ShowResearchView.__super__.constructor.apply(this, arguments);
      console.log('show research view');
      this.el = app.activePage();
      this.template = _.template('<article>\n    <header><h2><%=research.getHeadLine()%></h2></header>\n    <content><%=research.getSynopsis()%></content>\n</article>');
      this.model.bind('change', this.render);
      this.render();
    }

    ShowResearchView.prototype.render = function() {
      this.el.find('.ui-content').html(this.template({
        research: this.model
      }));
      return app.reapplyStyles(this.el);
    };

    return ShowResearchView;

  })(Backbone.View);

  /*
  class HomeController extends Backbone.Router
      routes:
          "home" : "home"
          "researches-:cid" : "show"
  
      constructor: ->
          super
          @_views= {}
      home: ->
          console.log @_views.home
          @_views.home||=new HomeView
      show: (cid) ->
          console.log "show research #{cid}"
          @_views["researches-#{cid}"]?= new ShowResearchView({model: window.Resesarchs.getByCid(cid)})
  
  app.homeController = new HomeController()
  */

  app.homeController = new $.mobile.Router({
    "#home": {
      handler: function() {
        var _base;
        console.log('home');
        if (!this.views) this.views = {};
        return (_base = this.views).home || (_base.home = new HomeView());
      },
      events: 's'
    },
    "#research([?].*)?": {
      handler: function(type, match, ui) {
        var cid, params, research, _base, _name;
        console.log('research');
        if (!match) return;
        params = app.homeController.getParams(match[1]);
        cid = params.cid;
        if (!this.views) this.views = {};
        if (!window.Researchs) console.log("window.Researchs is empty");
        research = window.Researchs.getByCid(cid);
        if (params) {
          return (_base = this.views)[_name = "research-" + cid] || (_base[_name] = new ShowResearchView({
            model: research
          }));
        }
      },
      events: 's'
    }
  });

  $(document).ready(function() {
    return window.location = '#home';
  });

  this.app = app;

  $(document).bind('pagebeforechange', function(toPage, opts) {});

}).call(this);
