(function() {
  var app = angular.module('cocktailGrid', []);

  app.controller("GridController", function($scope, $sce, $window){
    $scope.items = cocktails;
    $scope.recipe = false;
    $scope.name = "";
    $scope.ingredients = [];
    $scope.instructions = "";
    $scope.img = [];

    $scope.TrustHtmlSnippet = function(snippet) {
      return $sce.trustAsHtml(snippet);
    };

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
      $window.scrollTo(0,0);
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
    ingredients: ['&middot; <span class="number">2</span> ounces London dry gin', '&middot; <span class="number">1</span> teaspoon fine sugar', '&middot; <span class="number">&frac12;</span> ounce lemon juice', '&middot; club soda'],
    instructions: 'Fill a Collins glass with ice  <span class="number">&frac34</span> of the way. Pour in the gin, sugar, and lemon juice. Top with club soda and stir. Garnish with a lemon twist.' 
     },
    { name: 'Sloe Gin Fizz',
    img: ['img/Sloe_Gin_Fizz_thumb.jpg', 'img/Sloe_Gin_Fizz_web.jpg'],
    liquor: 'gin',
    ingredients: ['&middot;  <span class="number">2</span> ounces sloe gin', '&middot;  <span class="number">&frac12;</span> ounce lemon juice', '&middot;  <span class="number">1</span> teaspoon fine sugar', '&middot;  club soda'],
    instructions: 'Shake well with cracked ice, then strain into a chilled Collins glass.'
    },
    { name: 'Sidecar',
    img: ['img/Sidecar_thumb.jpg', 'img/Sidecar_web.jpg'],
    liquor: 'brandy',
    ingredients: ['&middot;  <span class="number">&frac34;</span> ounce Cointreau', '&middot;  <span class="number">&frac34;</span> ounce lemon juice', '&middot;  <span class="number">1 &frac12;</span> ounces Cognac'],
    instructions: 'Rub the rim of a cocktail glass with lemon juice and dip it in sugar. Shake the ingredients with ice and strain into the glass.'
    },
    { name: 'Sazerac',
    img: ['img/Sazerac_thumb.jpg', 'img/Sazerac_web.jpg'],
    liquor: 'whisky',
    ingredients: ['&middot;  <span class="number">1</span> sugar cube', '&middot;  <span class="number">2 &frac12;</span> ounces rye whisky', '&middot;  <span class="number">2</span> dashes Peychaud’s bitters', '&middot;  <span class="number">1</span> dash Angostura bitters', '&middot;  absinthe'],
    instructions: 'Muddle the sugar cube with a little water in a glass. Add the bitters and some ice, then the rye. Coat the inside of a second Old-Fashioned glass with absinthe, pouring off the excess. Strain the drink into the glass and top with a lemon twist.'
    },
    { name: 'Old Fashioned',
    img: ['img/Old_Fashioned_thumb.jpg', 'img/Old_Fashioned_web.jpg'],
    liquor: 'whisky',
    ingredients: ['&middot;  <span class="number">1</span> sugar cube', '&middot;  <span class="number">3</span> dashes Angostura bitters', '&middot;  <span class="number">2</span> ounces rye whisky', '&middot;  club soda'],
    instructions: 'Place the sugar cube in an Old-Fashioned glass. Add bitters and a little club soda. Muddle. Add one large ice cube, followed by the rye.'
    },
    { name: 'Negroni',
    img: ['img/Negroni_thumb.jpg', 'img/Negroni_web.jpg'],
    liquor: 'gin',
    ingredients: ['&middot;  <span class="number">&frac34;</span> ounce Campari', '&middot;  <span class="number">&frac34;</span> ounce Italian vermouth', '&middot;  <span class="number">1 &frac12;</span> ounces London dry gin'],
    instructions: 'Shake the ingredients well with ice, then strain into a chilled cocktail glass. Garnish with a twist of orange peel.'
    },
    { name: 'Mojito',
    img: ['img/Mojito_thumb.jpg', 'img/Mojito_web.jpg'],
    liquor: 'rum',
    ingredients: ['&middot;  <span class="number">&frac12;</span> ounce lime juice', '&middot;  <span class="number">1</span> teaspoon fine sugar', '&middot;  <span class="number">2</span> ounces white rum', '&middot;  mint leaves', '&middot;  club soda'],
    instructions: 'Muddle the lime juice, sugar, and mint leaves in a Collins glass. Fill the glass two-thirds of the way with cracked ice and add the rum. Top with club soda.'
    },
    { name: 'Mint Julep',
    img: ['img/Mint_Julep_thumb.jpg', 'img/Mint_Julep_web.jpg'],
    liquor: 'whisky',
    ingredients: ['&middot;  <span class="number">1</span> teaspoon sugar', '&middot;  <span class="number">3</span> ounces bourbon', '&middot;  mint'],
    instructions: 'Place <span class="number">5</span> or <span class="number">6</span> mint leaves into an Old-Fashioned glass or silver beaker, add sugar, and muddle gently. Fill the glass with cracked ice, pour in the bourbon, and stir. Garnish with more mint.'
    },
    { name: 'Martini',
    img: ['img/Martini_thumb.jpg', 'img/Martini_web.jpg'],
    liquor: 'gin',
    ingredients: ['&middot;  <span class="number">1</span> ounce dry vermouth', '&middot;  <span class="number">4</span> ounces London dry gin', '&middot;  cocktail olives'],
    instructions: 'Pour the vermouth into a cocktail shaker with ice. Shake; strain out the vermouth and discard. Add the gin. Shake and strain into a chilled cocktail glass. Garnish with olives.'
    },
    { name: 'Manhattan',
    img: ['img/Manhattan_thumb.jpg', 'img/Manhattan_web.jpg'],
    liquor: 'whisky',
    ingredients: ['&middot;  <span class="number">1</span> ounce Italian vermouth', '&middot;  <span class="number">2</span> ounces rye whisky', '&middot;  <span class="number">2</span> dashes Angostura bitters'],
    instructions: 'Shake the rye and vermouth with cracked ice and strain into a cocktail glass. Add the bitters. Garnish with a cocktail cherry if desired.'
    },
    { name: 'Jack Rose',
    img: ['img/Jack_Rose_thumb.jpg', 'img/Jack_Rose_web.jpg'],
    liquor: 'brandy',
    ingredients: ['&middot;  <span class="number">2</span> ounces applejack', '&middot;  <span class="number">1</span> ounce lime juice', '&middot;  <span class="number">&frac12;</span> ounce grenadine'],
    instructions: 'Shake the ingredients well with cracked ice, then strain into a chilled cocktail glass.'
    },
    { name: 'Daiquiri',
    img: ['img/Daiquiri_thumb.jpg', 'img/Daiquiri_web.jpg'],
    liquor: 'rum',
    ingredients: ['&middot;  <span class="number">2</span> ounces white rum', '&middot;  <span class="number">&frac12;</span> teaspoon fine sugar', '&middot;  <span class="number">&frac12;</span> ounce lime juice'],
    instructions: 'Shake the ingredients with ice, then strain into a cocktail glass. Garnish with a lime twist.'
    },
  ];

})();

