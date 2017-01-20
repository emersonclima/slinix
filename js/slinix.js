function Slinix() {    
    this.slides = [].slice.call(document.querySelectorAll(".slide"));
    this.activeSlide = null;

    this.start = function() {
        this.slides.forEach(function (el, i) {
            el.classList.add('inactive');
            if (!el.id) {
                el.id = 'slide-' + (i + 1);
            }
        });

        document.addEventListener( "keyup", function( event ) {

            if ( event.shiftKey || event.altKey || event.ctrlKey || event.metaKey ) {
                return;
            }

            if ( event.keyCode === 9 ||
               ( event.keyCode >= 32 && event.keyCode <= 34 ) ||
               ( event.keyCode >= 37 && event.keyCode <= 40 ) ) {
                switch ( event.keyCode ) {
                    case 33: // Page up
                    case 37: // Left
                    case 38: // Up
                             document.slinix.prev();
                             break;
                    case 9:  // Tab
                    case 32: // Space
                    case 34: // Page down
                    case 39: // Right
                    case 40: // Down
                             document.slinix.next();
                             break;
                }

                event.preventDefault();
            }
        }, false );

    }

    this.show = function(index) {
        if (this.activeSlide != null) {
            this.activeSlide.classList.remove('active');
            this.activeSlide.classList.add('inactive');
        }
        this.activeSlide = this.slides[index];
        this.activeSlide.classList.remove('inactive')
        this.activeSlide.classList.add('active');
    };
    
    this.first = function() {
        this.show(0);        
    };

    this.next = function() {
        this.show((this.slides.indexOf(this.activeSlide) + 1) % this.slides.length);
    };

    this.prev = function() {
        this.show((this.slides.indexOf(this.activeSlide) + 1) % this.slides.length);
    };

    this.start();
    this.first();
}

document.slinix = new Slinix();