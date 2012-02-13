(function() {

  Ext.define('cv.model.Research', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['pubId', 'headLine', 'synopsis', 'fileLink']
    }
  });

  cv.researchStore = new Ext.data.JsonStore({
    model: 'cv.model.Research',
    data: [
      {
        pubId: 309040,
        headLine: 'Malaysia Macro Flash: Dec CPI Confirms Disinflationary Trend',
        synopsis: 'Dec CPI inflation moderated to 3.0%YoY (Nov: 3.3%). This was slightly below consensus and our expectations for 3.1%YoY. MoM inflation remained stable from Nov at 0.1%MoM NSA. This brings inflation for the full year 2011 to 3.2% (2010: 1.7%).',
        fileLink: 'test.pdf'
      }, {
        pubId: 311205,
        headLine: 'The Week Ahead: Latin America Edition',
        synopsis: 'Highlights',
        fileLink: 'test.pdf'
      }, {
        pubId: 311255,
        headLine: 'Canada Weekly Notes: Jan 30 - Feb 3',
        synopsis: 'Canada Weekly Notes: Jan 30 - Feb 3  Industry-Based Output - Activity likely improved modestly in November. Industrial Product Prices - Producer price inflation probably slowed. Raw Materials Prices - Crude price inflation likely continued to decelerate. CFIB Small Business Survey - Capex and pricing plans probably softened. LFS Employment - Job gains likely narrowed keeping UR at recent high.'
      }, {
        pubId: 311264,
        headLine: 'Colombia Macro View: What to Expect from Banrep in 2012?',
        synopsis: "Colombia Minister of Finance Juan Carlos Echeverry announced new FX intervention measures last week after the central bank's monthly meeting. The communique stated the MOF would not bring any more USD from offshore accounts into the country in 2011, and that the MoF would purchase US1.2 bln in the local market to create a fund abroad to be used for future USD-denominated debt obligations. It also stated the MoF would support the CB, if needed, for curbing further COP appreciation.  We looked at possible scenarios for the MoF cash flow through 2011 to assess if the govt has enough resources to undertake the scheme.",
        fileLink: 'test.pdf'
      }, {
        pubId: 311249,
        headLine: 'Forecast Supplement: Week Ahead',
        synopsis: 'Private payrolls likely grew at a tepid pace in October, with service sector gains highlighted against a backdrop of declines in manufacturing and construction.',
        fileLink: 'test.pdf'
      }
    ]
  });

}).call(this);
