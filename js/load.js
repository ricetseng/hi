
$('.content').show();

$('.wrapper').show();
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
        $( '.nav-toggle' ).css( "background-color", "rgba(46, 46, 46, 1)" );
    } else {
        $( '.nav-toggle' ).css( "background-color", "rgba(255, 255, 255, 0)" );
    }
});




$('.nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
  $('.menu-items').toggleClass('fs');
});
