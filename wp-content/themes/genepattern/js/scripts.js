jQuery( document ).ready( function( $ ) {
	$( '#mobile-menu' ).click( function() {
		$( '#mobile-menu i' ).toggleClass( 'fa-close' );
		$( '#mobile-menu i' ).toggleClass( 'fa-bars' );
		$( 'body' ).toggleClass( 'nav-open' );
		return false;
	});

	$( window ).click(function() {
		$( 'body' ).removeClass( 'nav-open' );
		$( '#mobile-menu i' ).removeClass( 'fa-close' ).addClass( 'fa-bars' );
	});

	$('#header nav ul').click(function(event){
	    event.stopPropagation();
	});

	$( '#header nav li a' ).click( function(){
		if ( $('body').hasClass( 'nav-open' ) ) {
			var submenu = $( this ).siblings( 'ul' );
			if ( submenu.size() > 0 ) {
				submenu.toggleClass( 'active' );
				return false;
			}
		}
	});

	$('#banner a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});

	$("aside").stick_in_parent();
	$('#section-menu').onePageNav();



});
