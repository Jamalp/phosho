$(function (){
  $('.page-header').click(function(){
    $('.thumbnails').addClass('owl-carousel');
    $("#owl").owlCarousel({
         autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 2,

   
    })();
  })
 

});