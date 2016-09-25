$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $( '.nav-toggle' ).css( "background-color", "rgba(248, 248, 248, 1)" );
        $( '.avatar_ic' ).css( "transform", "rotate(180deg)" );
    } else {
        $( '.nav-toggle' ).css( "background-color", "rgba(255, 255, 255, 0)" );
        $( '.avatar_ic' ).css( "transform", "rotate(0deg)" );
    }
});
