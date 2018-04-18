$(document).ready(function() {


    $(".portfolio-item").click(function(){
      $(".para1").fadeToggle(700);
      $(this).children("p-portfolio").addClass("p-portfolio-change")
  		})

     // $(".portfolio-item").mouseleave(function(){
     //  $(".para1").fadeOut(700);
  	// })

      


});