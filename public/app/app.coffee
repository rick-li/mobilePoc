app = 
  activePage: ->
    $('.ui-page-active')
  redirectTo: (page) ->
    $.mobile.changePage(page)
  reapplyStyles: (el) ->
      el.find('ul[data-role]').listview();
      el.find('div[data-role="fieldcontain"]').fieldcontain();
      el.find('button[data-role="button"]').button();
      el.find('input,textarea').textinput();
      el.page()
  
  goBack: ->
    $.historyBack

class Venue extends Backbone.Model
  getName: ->
    @get('name')
  getAddress: ->
    [@get('address'), @get('city'), @get('state')].join ", "
  getImageUrl: ->
    @get('photo_url')
  getLatitude: ->
    @get('geolat')
  getLongtitude: ->
    @get('geolong')

  getMapUrl: (width=300, height=220) ->
    "http://maps.google.com/maps/api/staticmap?center=#{@getLatitude()},#{@getLongitude()}&zoom=14&size=#{width}x#{height}&maptype=terrain&markers=color:red|#{@getLatitude()},#{@getLongitude()}&sensor=false"  
  
class VenueCollection extends Backbone.Collection
  model: Venue
  constructor: ->
    super
    @reset $FOURSQUARE_JSON
window.Venues = new VenueCollection
console.log Venues

class EditVenueView extends Backbone.View
  constructor: ->
    super
    @el = app.activePage()
    
    @template = _.template('''
    <form action="venue-<%=venue.cid %>-update" method="post">
      <div data-role="fieldcontain">
        <label>Name</label>
        <input type="text" value="<%= venue.getName()%>" name="name" />
      <div>
      <div data-role="fieldcontain">
        <label>Address</label>
        <input type="text" value="<%= venue.get('address')%>" name="name" />
      <div>
      <div data-role="fieldcontain">
        <label>City</label>
        <input type="text" value="<%= venue.get('city')%>" name="name" />
      <div>
      <div data-role="fieldcontain">
        <label>State</label>
        <input type="text" value="<%= venue.get('sate')%>" name="name" />
      <div>
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

class HomeView extends Backbone.View
  constructor: ->
        super()
        @el = app.activePage()
        @template = _.template('''
            <div>
            <ul data-role="listview" data-theme="c" data-filter="true">
                <% venues.each(function(venue){ %>
                    <li><a href="#venues-<%= venue.cid%>"><%=venue.getName()%></a></li>
                <%})%>
            </ul>
            </div>
        ''')
        console.log 'home view render'
        console.log window.Venues
        @render()
  render: =>
        #console.log(window.Venues)
    @el.find('.ui-content').html(@template({venues: window.Venues}))
    app.reapplyStyles(@el)


class HomeController extends Backbone.Router
    routes:
        "home" : "home"
        "venues-:cid" : "show"

    constructor: ->
        super
        @_views= {}
    home: ->
        console.log @_views.home
        @_views.home||=new HomeView


app.homeController = new HomeController

$(document).ready ->
    Backbone.history.start()
    app.homeController.home()
@app = app
