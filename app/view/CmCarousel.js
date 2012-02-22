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
      var date, i, img, imgs, items, list, ln, title;
      console.log('get Carousel');
      list = cmData.list;
      imgs = ["cm1", "cm2", "Citi_Minute_Horizontal_480x262"];
      i = 0;
      ln = cmData.size;
      items = [];
      while (i < ln) {
        img = imgs[i];
        title = list[i].title;
        date = list[i].formatedDate;
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
