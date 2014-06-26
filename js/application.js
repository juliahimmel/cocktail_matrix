(function () {
  var app = angular.module('cocktailGrid', []);


  app.controller('GridController', function (){
    this.cocktails = cocktails;
  });

  var cocktails = [
    { name: 'Tom Collins',
    img: 'img/Tom_Collins_thumb.jpg' },
    { name: 'Sloe Gin Fizz',
    img: 'img/Sloe_Gin_Fizz_thumb.jpg'
    }
  ];

})();


// $(document).ready(function () {

//   $(".box").mouseover( function (){
//     $(this).siblings().addClass("fade")
//   }).mouseout( function() {
//     $(".box").removeClass("fade");
//   });

//   $(".box").on("click", function (){
//   	var recipe = $(this).parent().siblings(".recipe");
//   	recipe.removeClass("hidden");
//   	$(recipe.children(".ex")).on( "click", function (){
//   		recipe.addClass("hidden");
//   	});

//   });

  





// }); ///close doc ready

