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
      var i, img, imgs, items, ln, title, titles;
      console.log('get Carousel');
      imgs = ["cm1", "cm2"];
      titles = ['Emerging Markets Daily: Latin America Edition', 'Norway: Annual Address: No Policy Signals, Balanced Tone'];
      i = 0;
      ln = imgs.length;
      items = [];
      while (i < ln) {
        img = imgs[i];
        title = titles[i];
        items.push({
          xtype: 'panel',
          layout: 'vbox',
          items: [
            {
              xtype: "image",
              flex: '2',
              cls: "my-carousel-item-img",
              src: "resources/images/" + img + ".png"
            }, {
              dock: 'bottom',
              html: title,
              flex: '1'
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
