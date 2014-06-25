$(document).ready(function () {

  $(".box").mouseover( function (){
    $(this).siblings().addClass("fade")
  }).mouseout( function() {
    $(".box").removeClass("fade");
  });

  $(".box").on("click", function (){
  	var recipe = $(this).parent().siblings(".recipe");
  	recipe.removeClass("hidden");
  	$(recipe.children(".ex")).on( "click", function (){
  		recipe.addClass("hidden");
  	});

  });

  





}); ///close doc ready

