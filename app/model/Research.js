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
        synopsis: 'adfadfadfadfdaf',
        fileLink: 'http://www.education.gov.yk.ca/pdf/pdf-test.pdf'
      }, {
        pubId: 311205,
        headLine: 'The Week Ahead: Latin America Edition',
        synopsis: 'Highlights',
        fileLink: 'http://www.education.gov.yk.ca/pdf/pdf-test.pdf'
      }, {
        pubId: 311255,
        headLine: 'Canada Weekly Notes: Jan 30 - Feb 3',
        synopsis: 'dfadfadf'
      }, {
        pubId: 311264,
        headLine: 'Colombia Macro View: What to Expect from Banrep in 2012?',
        synopsis: "adsfdafadfadfadf",
        fileLink: 'http://www.education.gov.yk.ca/pdf/pdf-test.pdf'
      }, {
        pubId: 311249,
        headLine: 'Forecast Supplement: Week Ahead',
        synopsis: 'Private payrolls likely grew at a tepid pace in October, with service sector gains highlighted against a backdrop of declines in manufacturing and construction.',
        fileLink: 'http://www.education.gov.yk.ca/pdf/pdf-test.pdf'
      }
    ]
  });

}).call(this);
