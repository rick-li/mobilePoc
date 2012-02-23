Ext.define('Cv.view.CvCarousel',
    extend: Ext.Carousel
    xtype: 'cvCarousel'
    config:
        preventDragPropagation: false
        
    onDragStart: (e)-> 
        direction = this.getDirection()
        absDeltaX = e.absDeltaX
        absDeltaY = e.absDeltaY
        directionLock = this.getDirectionLock()

        this.isDragging = true

        if directionLock 
            if ((direction is 'horizontal') and (absDeltaX > absDeltaY)) or ((direction is 'vertical') and (absDeltaY > absDeltaX))
                e.stopPropagation();
            else 
                this.isDragging = false;
                return;
            
        

        if (this.isAnimating) 
            this.getActiveCarouselItem().getTranslatable().stopAnimation();
        

        this.dragStartOffset = this.offset;
        this.dragDirection = 0;
        
        if this.getPreventDragPropagation 
            e.stopPropagation();
)
