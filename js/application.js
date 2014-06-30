(function() {
  var app = angular.module('cocktailGrid', []);


  // app.controller('GridController', function(){
  //   this.hello = "Hello";
  //   this.items = cocktails;
  // });

  app.controller("GridController", function($scope){
   $scope.items = cocktails;        
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
    img: 'img/Tom_Collins_thumb.jpg' },
    { name: 'Sloe Gin Fizz',
    img: 'img/Sloe_Gin_Fizz_thumb.jpg'
    },
    { name: 'Sidecar',
    img: 'img/Sidecar_thumb.jpg'
    },
    { name: 'Sazerac',
    img: 'img/Sazerac_thumb.jpg'
    },
    { name: 'Old Fashioned',
    img: 'img/Old_Fashioned_thumb.jpg'
    },
    { name: 'Negroni',
    img: 'img/Negroni_thumb.jpg'
    },
    { name: 'Mojito',
    img: 'img/Mojito_thumb.jpg'
    },
    { name: 'Mint Julep',
    img: 'img/Mint_Julep_thumb.jpg'
    },
    { name: 'Martini',
    img: 'img/Martini_thumb.jpg'
    },
    { name: 'Manhattan',
    img: 'img/Manhattan_thumb.jpg'
    },
    { name: 'Jack Rose',
    img: 'img/Jack_Rose_thumb.jpg'
    },
    { name: 'Daiquiri',
    img: 'img/Daiquiri_thumb.jpg'
    },
  ];

})();

