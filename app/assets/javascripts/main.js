$(function (){
  $(".thumbnail").click(function() {
 		$.fancybox.open([{
 			href : $(this).find('img').attr('src'),
 			closeBtn: false,
 			padding: 7
 		}]);
        return false;
    });
});

