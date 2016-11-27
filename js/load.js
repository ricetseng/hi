(function() {

  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');
        brand.classList.add('menu__brand--active');
        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());
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
