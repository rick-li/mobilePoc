(function() {

  Ext.define('Cv.view.CitiMinute', {
    extend: 'Cv.view.Portlet',
    xtype: 'CitiMinute',
    config: {
      height: 280
    },
    initialize: function() {
      console.log('Carousel init');
      this.add({
        xtype: 'cvCarousel',
        direction: 'horizontal',
        items: this.getCrls(),
        id: 'cmCrls',
        listeners: {
          tap: function() {
            return console.log('tap');
          }
        }
      });
      return this.callParent();
    },
    getCrls: function() {
      var date, i, id, img, imgs, items, list, ln, title;
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
        id = list[i].alertId;
        items.push({
          xtype: 'panel',
          layout: 'vbox',
          cls: 'cm-container',
          id: id,
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
