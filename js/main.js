$(document).ready(function() {

	// To top
	$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
	});

	// Adaptive menu
	$('.menu-btn').on('click', function () {
		if ($(this).parents('.menu_wrap').is('.opened-menu') !== true) {
			$('.menu_wrap').addClass('opened-menu');
			$('#main-menu').addClass('opened');

		}
		else if ($(this).parents('.menu_wrap').is('.opened-menu') === true) {
			$('.menu_wrap').removeClass('opened-menu');
			$('#main-menu').removeClass('opened');
		}
	});

	// Popup
	$(document).ready(function() {
		$('#pop-up').click(function() {
			$('#modal-window').addClass('active');
		});
		$('.modal-close').click(function() {
			$('#modal-window').removeClass('active');
		});
	});

	//  Slider
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		animateOut: 'fadeOut',
		// autoplay: true,
		autoplaySpeed: 100,
		autoplayTimeout: 2400,
		smartSpeed: 100,
		nav: true,
		navSpeed: 100,
		navText: ["<img src='img/prev.jpg'>","<img src='img/next.jpg'>"],
		responsive: {
			0: {
				items: 1
			}
		}
	})

	// Sidebar
	$('.q_title').on("click", function() {
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).next('.answer').slideUp(200);
		} else {
			$('.q_title').removeClass("active");
			$(this).addClass("active");
			$('.answer').slideUp(200);
			$(this).next('.answer').slideDown(200);
		}
	})

});