$('.main_h').hide();

 function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');

      /* This line hide loader and show content */
      setTimeout(function(){
        $('.main_h').show();
        //$('.main_h').fadeIn("slow");
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },2000);
    });

}

loaderSpinner();


$('.nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
  $('.menu-items').toggleClass('fs');
});
