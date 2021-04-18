(function($){
    "use strick";
    // data backgrund 
    $("[data-background]").each(function(){
        $(this).css("background-image"," url("+ $(this).attr("data-background") +")");
    });

/*Counter up plugin*/
$('.counter').counterUp({
    delay:20,
    time:1000
});


/*slick slider for testimonial */
$('.user_info').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.user_image'
  });
  $('.user_image').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    asNavFor: '.user_info',
    arrows: false,
  });
              




})(jQuery);