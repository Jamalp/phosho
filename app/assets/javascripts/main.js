$(function (){
  $(".fancybox").fancybox();
  $(".thumbnail a").fancybox({
    width: '500px',
    height: '500px',
    openEffect  : 'fade',
    closeEffect : 'fade',
    closeBtn    :  false,
    beforeShow: function(){
      $(".fancybox-skin").css({
        borderRadius: "190px",
      });

     },
    afterClose: function() {
      $(".thumbnail img").css({
        borderRadius: "1000",
      });
      $(".thumbnail").show();
    }
  });

});