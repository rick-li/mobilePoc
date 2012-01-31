#Is research store the same across site?
Ext.regModel('Research',
    fields: ['pubId', 'headLine', 'synopsis']
)
cv.researchStore = new Ext.data.JsonStore(
    model: 'Research',
    data: [
        {pubId: 309040, headLine: 'Malaysia Macro Flash: Dec CPI Confirms Disinflationary Trend', synopsis: 'Dec CPI inflation moderated to 3.0%YoY (Nov: 3.3%). This was slightly below consensus and our expectations for 3.1%YoY. MoM inflation remained stable from Nov at 0.1%MoM NSA. This brings inflation for the full year 2011 to 3.2% (2010: 1.7%).'}
        {pubId: 311205,headLine: 'The Week Ahead: Latin America Edition', synopsis: 'Highlights'}
        {pubId: 311255, headLine: 'Canada Weekly Notes: Jan 30 - Feb 3', synopsis: 'Canada Weekly Notes: Jan 30 - Feb 3  Industry-Based Output - Activity likely improved modestly in November. Industrial Product Prices - Producer price inflation probably slowed. Raw Materials Prices - Crude price inflation likely continued to decelerate. CFIB Small Business Survey - Capex and pricing plans probably softened. LFS Employment - Job gains likely narrowed keeping UR at recent high.'}
        {pubId: 311264, headLine: 'Colombia Macro View: What to Expect from Banrep in 2012?', synopsis: "Colombia Minister of Finance Juan Carlos Echeverry announced new FX intervention measures last week after the central bank's monthly meeting. The communique stated the MOF would not bring any more USD from offshore accounts into the country in 2011, and that the MoF would purchase US1.2 bln in the local market to create a fund abroad to be used for future USD-denominated debt obligations. It also stated the MoF would support the CB, if needed, for curbing further COP appreciation.  We looked at possible scenarios for the MoF cash flow through 2011 to assess if the govt has enough resources to undertake the scheme."}
        {pubId: 311249, headLine: 'Forecast Supplement: Week Ahead', synopsis: 'Private payrolls likely grew at a tepid pace in October, with service sector gains highlighted against a backdrop of declines in manufacturing and construction.'}
    ]
)
cv.ResearchDetail = Ext.extend(Ext.Panel,
    title:''
    record:''
    initComponent: ->
        console.log 'init research detail'
        console.log @record
        @dockedItems = [{
            xtype: 'toolbar'
            title: @record.data['headLine']
            items: [{
                text: 'Back'
                handler: ->
                    Ext.redirect(cv.previousHashUrl)
            }
            ]
        }]
        @items= [{
            tpl: '{synopsis}'
            data: @record.data
            styleHtmlContent: true
        }]
        cv.ResearchDetail.superclass.initComponent.call(this)
)

cv.ResearchPortlet = Ext.extend(cv.Portlet,
    height: 200
    initComponent: ->
        cv.ResearchPortlet.superclass.initComponent.call(this)
        @.add(@createList())
    selectArticle: (sel, records)->
            #filter out the unselect 
            if records.length == 0 then return
            console.log 'select article'
            record = records[0]
            type = 'demo'
            pubId = record.data.pubId
            console.log 'select research '+pubId
            cv.previousHashUrl = cv.util.getCurrentHashUrl()
            Ext.dispatch
                controller: 'research'
                action: 'detail'
                pubId: pubId
                type: type
                historyUrl: 'research/'+type+'/'+pubId
    createList: ->
        list = new Ext.List(
            height: @height
            itemTpl: '<div>{headLine}</div><div>{synopsis}</div>'
            store: cv.researchStore
            listeners:
                selectionchange:
                    fn: @selectArticle
                    #fn: ->
                    #    console.log this.selectArticle
                    #scope: this
            
        )
        ###
        list.on('itemtap', (list, idx, item, e)->
            console.log(researchStore.getAt(idx))
            #viewport switch to item view
            #
        )
        ###
        return list
)
