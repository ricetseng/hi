 function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');

      /* This line hide loader and show content */
      setTimeout(function(){
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },3500);
    });

}

loaderSpinner();