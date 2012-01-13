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
        console.log('Im in constructor')
        console.log(app.activePage())
        console.log($('.ui-page-active'))
        @el = app.activePage()
        @template = _.template('''
            <div>
            <ul data-role="listview" data-theme="c" data-filter="true">
                <% researches.each(function(research){ %>
                    <!--<li><a href="index.html"><%=research.getHeadLine()%></a></li>-->
                    <li><a href="#research?cid=<%= research.cid%>"><%=research.getHeadLine()%></a></li>
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

class ShowResearchView extends Backbone.View
    constructor: ->
        super
        console.log('show research view')
        @el = app.activePage()
        @template = _.template('''
        <article>
            <header><h2><%=research.getHeadLine()%></h2></header>
            <content><%=research.getSynopsis()%></content>
        </article>
        ''')
        @model.bind 'change', @render
        @render()

    render: =>
        @el.find('.ui-content').html(@template(research: @model))
        app.reapplyStyles(@el)

###
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
###

app.homeController = new $.mobile.Router(
    "#home" :
        handler : ->
            console.log 'home'
            @views = {} if not @views
            #clear research content
            #$('#research .ui-content').html('')
            #$('#research .ui-header h1').html('')
            @views.home ||= new HomeView()
        events: 's'
    "#research([?].*)?" :
        handler: (type, match, ui)->
            console.log 'research'
            if not match then return
            params = app.homeController.getParams(match[1])
            cid = params.cid
            @views = {} if not @views
            if not window.Researchs then console.log("window.Researchs is empty")
            research = window.Researchs.getByCid(cid)
            if params then @views["research-#{cid}"] ||= new ShowResearchView({model:research})
        events: 's'

)


$(document).ready ->
   # Backbone.history.start()
   # app.homeController.home()
   window.location='#home'
   
@app = app
$(document).bind('pagebeforechange', (toPage, opts)->
    #check page beforechange here
)
