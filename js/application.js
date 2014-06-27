(function() {
  var app = angular.module('cocktailGrid', []);


  // app.controller('GridController', function(){
  //   this.hello = "Hello";
  //   this.items = cocktails;
  // });

  app.controller("GridController", function($scope){
   $scope.items = cocktails;        
  });

  var cocktails = [
    { name: 'Tom Collins',
    img: 'img/Tom_Collins_thumb.jpg' },
    { name: 'Sloe Gin Fizz',
    img: 'img/Sloe_Gin_Fizz_thumb.jpg'
    }
  ];

})();

