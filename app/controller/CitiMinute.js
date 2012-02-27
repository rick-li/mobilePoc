(function() {

  Ext.define('Cv.controller.CitiMinute', {
    extend: 'Ext.app.Controller',
    config: {
      refs: {
        carousels: '#cmCrls activeItem'
      },
      control: {
        carousels: {
          tap: 'redirect'
        }
      },
      routes: {
        'citiminute/:alertId': 'showDetail'
      }
    },
    redirect: function(cm) {
      var alertId;
      console.log('redirect');
      alertId = carousels.getActiveItem().getId();
      console.log('carousels' + carousels);
      return this.redirectTo('citiminute/' + alertId);
    },
    showDetail: function(alertId) {
      console.log('citiminute controller ' + alertId);
      if (window.device) {
        new VideoPlayer().play("http://broken-links.com/tests/media/BigBuck.m4v");
      } else {

      }
      return Ext.getCmp('viewport').setActiveItem(detail, {
        type: 'slide',
        direction: 'left'
      });
    },
    launch: function() {
      return console.log('launch citiminute controller');
    }
  });

}).call(this);
