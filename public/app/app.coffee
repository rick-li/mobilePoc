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

class Research extends Backbone.Model
  getHeadLine: ->
    @get('headLine')
  getPubDate: ->
    @get('pubDate')
  getFileLink: ->
    @get('fileLink')
  getSynopsis: ->
    @get('synopsis')
    
class ResearchCollection extends Backbone.Collection
  model: Research
  constructor: ->
    super
    @reset $RESEARCH_JSON.store.data.list
window.Researchs = new ResearchCollection
console.log Researchs

###
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
###


class HomeView extends Backbone.View
  constructor: ->
        super()
        @el = app.activePage()
        @template = _.template('''
            <div>
            <ul data-role="listview" data-theme="c" data-filter="true">
                <% researches.each(function(research){ %>
                    <li><a href="#researches-<%= research.pubId%>"><%=research.getHeadLine()%></a></li>
                <%})%>
            </ul>
            </div>
        ''')
        console.log 'home view render'
        console.log window.Researchs
        @render()
  render: =>
        #console.log(window.Researchs)
    @el.find('.ui-content').html(@template({researches: window.Researchs}))
    app.reapplyStyles(@el)


class HomeController extends Backbone.Router
    routes:
        "home" : "home"
        "researchs-:cid" : "show"

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
