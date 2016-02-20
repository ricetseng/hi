$('.main_h').hide();

 function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');

      /* This line hide loader and show content */
      setTimeout(function(){
        $('.main_h').show();
        $('.content').fadeIn("slow");
        $('.main_h').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },2000);
    });

}

loaderSpinner();

/*----------------------------nav--------------------------------*/
/*
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
*/
/**-------------------------nav change height-----------------------**/
/*
window.defaultStatus = 
    $('.main_h').addClass('sticky');
    $( '.logo' ).css( "color", "#fff" );
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $( '.main_h' ).css( "height", "60px" );
        $( '.logo' ).css( "margin-top", "10px" );
        $( '.logo' ).css( "font-size", "12px" );
        $( 'nav ul a' ).css( "font-size", "12px" );
        $( '.row nav' ).css( "margin-top", "6px" );
    } else {
        $( '.main_h' ).css( "height", "70px" );
        $( '.logo' ).css( "margin-top", "12px" );
        $( '.logo' ).css( "font-size", "16px" );
        $( 'nav ul a' ).css( "font-size", "14px" );
        $( '.row nav' ).css( "margin-top", "10px" );
    }
});

$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});


$('.main_h li a').click(function() {

    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    } 
});

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
*/
/*------------------------light background nav-----------------------*/

        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_h').addClass('sticky');
                $( '.logo' ).css( "color", "#fff" );
            } else {
                $('.main_h').removeClass('sticky');
                $( '.logo' ).css( "color", "#111" );
            }
        });
        
        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.main_h').removeClass('open-nav');
            } else {
                $('.main_h').addClass('open-nav');
            }
        });

        $('.main_h li a').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_h').removeClass('open-nav');
            }
        });

        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });

/*------------------------dark background nav-----------------------*/
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h_dark').addClass('sticky-dark');
    } else {
        $('.main_h_dark').removeClass('sticky-dark');
    }
});

// Mobile Navigation
$('.mobile-toggle-dark').click(function() {
    if ($('.main_h_dark').hasClass('open-nav-dark')) {
        $('.main_h_dark').removeClass('open-nav-dark');
    } else {
        $('.main_h_dark').addClass('open-nav-dark');
    }
});

$('.main_h_dark li a').click(function() {
    if ($('.main_h_dark').hasClass('open-nav-dark')) {
        $('.navigation').removeClass('open-nav-dark');
        $('.main_h_dark').removeClass('open-nav-dark');
    }
});

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
