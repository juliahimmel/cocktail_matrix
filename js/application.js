(function() {
  var app = angular.module('cocktailGrid', []);


  // app.controller('GridController', function(){
  //   this.hello = "Hello";
  //   this.items = cocktails;
  // });

  app.controller("GridController", function($scope){
   $scope.items = cocktails;
   $scope.active = false;
   $scope.clickHere = function() {
      if ($scope.active == false) {
        $scope.active = true;
      } else {
        $scope.active = false;
      };
      
   };

  });

  app.filter('range', function(){
    return function(array, lowerBound, upperBound){
        var filtered=[];
        for(var i=0;i<array.length;i++){
                if(i>=lowerBound && i<=upperBound)
                    filtered.push(array[i]);
        }
        return filtered;
    } 
  });

  var cocktails = [
    { name: 'Tom Collins',
    img: 'img/Tom_Collins_thumb.jpg',
    liquor: 'gin' },
    { name: 'Sloe Gin Fizz',
    img: 'img/Sloe_Gin_Fizz_thumb.jpg',
    liquor: 'gin'
    },
    { name: 'Sidecar',
    img: 'img/Sidecar_thumb.jpg',
    liquor: 'brandy'
    },
    { name: 'Sazerac',
    img: 'img/Sazerac_thumb.jpg',
    liquor: 'whisky'
    },
    { name: 'Old Fashioned',
    img: 'img/Old_Fashioned_thumb.jpg',
    liquor: 'whisky'
    },
    { name: 'Negroni',
    img: 'img/Negroni_thumb.jpg',
    liquor: 'gin'
    },
    { name: 'Mojito',
    img: 'img/Mojito_thumb.jpg',
    liquor: 'rum'
    },
    { name: 'Mint Julep',
    img: 'img/Mint_Julep_thumb.jpg',
    liquor: 'whisky'
    },
    { name: 'Martini',
    img: 'img/Martini_thumb.jpg',
    liquor: 'gin'
    },
    { name: 'Manhattan',
    img: 'img/Manhattan_thumb.jpg',
    liquor: 'whisky'
    },
    { name: 'Jack Rose',
    img: 'img/Jack_Rose_thumb.jpg',
    liquor: 'brandy'
    },
    { name: 'Daiquiri',
    img: 'img/Daiquiri_thumb.jpg',
    liquor: 'rum'
    },
  ];

})();

