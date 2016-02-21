
$('.wrapper').hide();

 function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');

      setTimeout(function(){
        $('.wrapper').show();
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
      },2000);
    });

}

loaderSpinner();


$('.nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
  $('.menu-items').toggleClass('fs');
});
