(function() {

  Ext.define('Cv.view.CmCarousel', {
    extend: 'Cv.view.Portlet',
    xtype: 'CmCarousel',
    config: {
      layout: 'fit',
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
      var i, img, imgs, items, ln;
      console.log('get Carousel');
      imgs = ["cm1", "cm2"];
      i = 0;
      ln = imgs.length;
      items = [];
      while (i < ln) {
        img = imgs[i];
        items.push({
          xtype: "image",
          cls: "my-carousel-item-img",
          src: "resources/images/" + img + ".png"
        });
        i++;
      }
      console.log('Carousel items' + items);
      console.log(items);
      return items;
    }
  });

}).call(this);
