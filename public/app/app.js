(function() {
  var EditVenueView, HomeController, HomeView, Venue, VenueCollection, app,
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

  Venue = (function(_super) {

    __extends(Venue, _super);

    function Venue() {
      Venue.__super__.constructor.apply(this, arguments);
    }

    Venue.prototype.getName = function() {
      return this.get('name');
    };

    Venue.prototype.getAddress = function() {
      return [this.get('address'), this.get('city'), this.get('state')].join(", ");
    };

    Venue.prototype.getImageUrl = function() {
      return this.get('photo_url');
    };

    Venue.prototype.getLatitude = function() {
      return this.get('geolat');
    };

    Venue.prototype.getLongtitude = function() {
      return this.get('geolong');
    };

    Venue.prototype.getMapUrl = function(width, height) {
      if (width == null) width = 300;
      if (height == null) height = 220;
      return "http://maps.google.com/maps/api/staticmap?center=" + (this.getLatitude()) + "," + (this.getLongitude()) + "&zoom=14&size=" + width + "x" + height + "&maptype=terrain&markers=color:red|" + (this.getLatitude()) + "," + (this.getLongitude()) + "&sensor=false";
    };

    return Venue;

  })(Backbone.Model);

  VenueCollection = (function(_super) {

    __extends(VenueCollection, _super);

    VenueCollection.prototype.model = Venue;

    function VenueCollection() {
      VenueCollection.__super__.constructor.apply(this, arguments);
      this.reset($FOURSQUARE_JSON);
    }

    return VenueCollection;

  })(Backbone.Collection);

  window.Venues = new VenueCollection;

  console.log(Venues);

  EditVenueView = (function(_super) {

    __extends(EditVenueView, _super);

    function EditVenueView() {
      this.render = __bind(this.render, this);      EditVenueView.__super__.constructor.apply(this, arguments);
      this.el = app.activePage();
      this.template = _.template('<form action="venue-<%=venue.cid %>-update" method="post">\n  <div data-role="fieldcontain">\n    <label>Name</label>\n    <input type="text" value="<%= venue.getName()%>" name="name" />\n  <div>\n  <div data-role="fieldcontain">\n    <label>Address</label>\n    <input type="text" value="<%= venue.get(\'address\')%>" name="name" />\n  <div>\n  <div data-role="fieldcontain">\n    <label>City</label>\n    <input type="text" value="<%= venue.get(\'city\')%>" name="name" />\n  <div>\n  <div data-role="fieldcontain">\n    <label>State</label>\n    <input type="text" value="<%= venue.get(\'sate\')%>" name="name" />\n  <div>\n  <button type="submit" data-role="button">Save</button>\n</form>');
      this.model.bind('change', this.render);
      this.render();
    }

    EditVenueView.prototype.events = {
      "submit form": "onSubmit"
    };

    EditVenueView.prototype.onSubmit = function(e) {
      this.model.set({
        name: this.$("input[name='name']").val(),
        address: this.$("input[name='address']").val(),
        city: this.$("input[name='city']").val(),
        state: this.$("input[name='state']").val()
      });
      this.model.trigger('change');
      app.goBack();
      e.preventDefault;
      return e.stopPropagation;
    };

    EditVenueView.prototype.render = function() {
      this.el.find('h1').text("Editing " + (this.model.getName()));
      this.el.find('.ui-content').html(this.template({
        venue: this.model
      }));
      return this.delegateEvents;
    };

    return EditVenueView;

  })(Backbone.View);

  HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.render = __bind(this.render, this);      HomeView.__super__.constructor.call(this);
      this.el = app.activePage();
      this.template = _.template('<div>\n<ul data-role="listview" data-theme="c" data-filter="true">\n    <% venues.each(function(venue){ %>\n        <li><a href="#venues-<%= venue.cid%>"><%=venue.getName()%></a></li>\n    <%})%>\n</ul>\n</div>');
      console.log('home view render');
      console.log(window.Venues);
      this.render();
    }

    HomeView.prototype.render = function() {
      this.el.find('.ui-content').html(this.template({
        venues: window.Venues
      }));
      return app.reapplyStyles(this.el);
    };

    return HomeView;

  })(Backbone.View);

  HomeController = (function(_super) {

    __extends(HomeController, _super);

    HomeController.prototype.routes = {
      "home": "home",
      "venues-:cid": "show"
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
