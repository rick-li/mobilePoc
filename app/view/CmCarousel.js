(function() {

  Ext.define('Cv.view.CmCarousel', {
    extend: 'Cv.view.Portlet',
    xtype: 'CmCarousel',
    config: {
      height: 280
    },
    initialize: function() {
      console.log('Carousel init');
      this.add({
        xtype: 'carousel',
        direction: 'horizontal',
        items: this.getCrls()
      });
      return this.callParent();
    },
    getCrls: function() {
      var date, dates, i, img, imgs, items, ln, title, titles;
      console.log('get Carousel');
      imgs = ["cm1", "cm2"];
      titles = ['Emerging Markets Daily: Latin America Edition', 'Norway: Annual Address: No Policy Signals, Balanced Tone'];
      dates = ['08 Feb 12 03:54', '01 Dec 11 21:44'];
      i = 0;
      ln = imgs.length;
      items = [];
      while (i < ln) {
        img = imgs[i];
        title = titles[i];
        date = dates[i];
        items.push({
          xtype: 'panel',
          layout: 'vbox',
          cls: 'cm-container',
          items: [
            {
              xtype: "image",
              flex: '3.5',
              cls: "my-carousel-item-img",
              src: "resources/images/" + img + ".png"
            }, {
              dock: 'bottom',
              html: '<div>' + title + '</div><div>' + date + '</div>',
              flex: '1',
              cls: 'cm-carousel-text'
            }
          ]
        });
        i++;
      }
      console.log('Carousel items' + items);
      console.log(items);
      return items;
    }
  });

}).call(this);
