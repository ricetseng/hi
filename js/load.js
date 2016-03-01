
//$('.content').show();

//$('.wrapper').show();
/*
 function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');

      setTimeout(function(){
        $('.wrapper').show();
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
      },2000);
    });

}*/

//loaderSpinner();


$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $( '.nav-toggle' ).css( "background-color", "rgba(248, 248, 248, 1)" );
        $( '.avatar_ic' ).css( "transform", "rotate(180deg)" );
    } else {
        $( '.nav-toggle' ).css( "background-color", "rgba(255, 255, 255, 0)" );
        $( '.avatar_ic' ).css( "transform", "rotate(0deg)" );
    }
});



//----------more button-----------------

/*

$('.show_more').hide();
$('.container_load').click(function(){
    $('.show_more').show();
    $('.container_load').fadeOut();
});

*/
//----------end more button------------




$('.nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
    //$( '.nav-toggle' ).css( "background-color", "rgba(46, 46, 46, 0)" );
    //$( '.nav-toggle' ).css( "transform", "rotate(360deg)" );
    $('.menu-items').toggleClass('fs');
});
