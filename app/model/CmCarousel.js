(function() {

  Ext.define('Cv.model.CmCarousel', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['title', 'image']
    }
  });

  Cv.cmCarouselStore = new Ext.data.Store({
    model: 'Cv.model.CmCarousel',
    data: [
      {
        title: "Japan Economic Daily: No major economic data released today",
        image: 'cm1'
      }, {
        title: "Emerging Markets Daily: Latin America Edition",
        image: 'cm2'
      }
    ]
  });

}).call(this);
