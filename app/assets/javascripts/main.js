$(function (){
  $(".thumbnail").click(function() {
 		$.fancybox.open([{href : $(this).find('img').attr('src')}]);
        return false;
    });
});

