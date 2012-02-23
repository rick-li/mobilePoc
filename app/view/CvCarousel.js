(function() {

  Ext.define('Cv.view.CvCarousel', {
    extend: Ext.Carousel,
    xtype: 'cvCarousel',
    config: {
      preventDragPropagation: false
    },
    onDragStart: function(e) {
      var absDeltaX, absDeltaY, direction, directionLock;
      direction = this.getDirection();
      absDeltaX = e.absDeltaX;
      absDeltaY = e.absDeltaY;
      directionLock = this.getDirectionLock();
      this.isDragging = true;
      if (directionLock) {
        if (((direction === 'horizontal') && (absDeltaX > absDeltaY)) || ((direction === 'vertical') && (absDeltaY > absDeltaX))) {
          e.stopPropagation();
        } else {
          this.isDragging = false;
          return;
        }
      }
      if (this.isAnimating) {
        this.getActiveCarouselItem().getTranslatable().stopAnimation();
      }
      this.dragStartOffset = this.offset;
      this.dragDirection = 0;
      if (this.getPreventDragPropagation) return e.stopPropagation();
    }
  });

}).call(this);
