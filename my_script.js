$(document).ready(function() {

    $("#more-heading").click(function(){
		$(".skills").slideToggle(1000);
  	})

    $(".portfolio-item").click(function(){
      $(this).children(".para1").slideToggle(1000);
  	})

});