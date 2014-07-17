(function() {
  var app = angular.module('cocktailGrid', []);

  app.controller("GridController", function($scope){
    $scope.items = cocktails;
    $scope.recipe = false;
    $scope.name = "";
    $scope.ingredients = [];
    $scope.instructions = "";
    $scope.img = [];

    $scope.gridFade = function(spirit) {
      $("div.matrix").children().addClass("fade");
      $("div.matrix").find("div." + spirit).addClass("unfade");
    };

    $scope.unfade = function() {
      $("div.matrix").children().removeClass("fade");
      $("div.matrix").children().removeClass("unfade");

    };

    $scope.recipeShow = function(item) {
      $scope.recipe = true;
      $scope.name = item.name;
      $scope.ingredients = item.ingredients;
      $scope.instructions = item.instructions;
      $scope.img = item.img;
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
    img: ['img/Tom_Collins_thumb.jpg', 'img/Tom_Collins_web.jpg'],
    liquor: 'gin',
    ingredients: ['2 ounces London dry gin', '1 teaspoon fine sugar', '&frac12; ounce lemon juice', 'club soda'],
    instructions: 'Fill a Collins glass with ice  &frac34 of the way. Pour in the gin, sugar, and lemon juice. Top with club soda and stir. Garnish with a lemon twist.' 
     },
    { name: 'Sloe Gin Fizz',
    img: ['img/Sloe_Gin_Fizz_thumb.jpg', 'img/Sloe_Gin_Fizz_web.jpg'],
    liquor: 'gin'
    },
    { name: 'Sidecar',
    img: ['img/Sidecar_thumb.jpg', 'img/Sidecar_web.jpg'],
    liquor: 'brandy'
    },
    { name: 'Sazerac',
    img: ['img/Sazerac_thumb.jpg', 'img/Sazerac_web.jpg'],
    liquor: 'whisky'
    },
    { name: 'Old Fashioned',
    img: ['img/Old_Fashioned_thumb.jpg', 'img/Old_Fashioned_web.jpg'],
    liquor: 'whisky'
    },
    { name: 'Negroni',
    img: ['img/Negroni_thumb.jpg', 'img/Negroni_web.jpg'],
    liquor: 'gin'
    },
    { name: 'Mojito',
    img: ['img/Mojito_thumb.jpg', 'img/Mojito_web.jpg'],
    liquor: 'rum'
    },
    { name: 'Mint Julep',
    img: ['img/Mint_Julep_thumb.jpg', 'img/Mint_Julep_web.jpg'],
    liquor: 'whisky'
    },
    { name: 'Martini',
    img: ['img/Martini_thumb.jpg', 'img/Martini_web.jpg'],
    liquor: 'gin'
    },
    { name: 'Manhattan',
    img: ['img/Manhattan_thumb.jpg', 'img/Manhattan_web.jpg'],
    liquor: 'whisky'
    },
    { name: 'Jack Rose',
    img: ['img/Jack_Rose_thumb.jpg', 'img/Jack_Rose_web.jpg'],
    liquor: 'brandy'
    },
    { name: 'Daiquiri',
    img: ['img/Daiquiri_thumb.jpg', 'img/Daiquiri_web.jpg'],
    liquor: 'rum'
    },
  ];

})();

