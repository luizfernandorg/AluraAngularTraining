// myApp.config(function($routeProvider,$locationProvider) {
myApp.config(function($routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider.when('/',{
    templateUrl: 'partials/principal.html',
    controller: "FotosController"
  });
  $routeProvider.when('/cadastro',{
    templateUrl: 'partials/cadastra.html',
    controller: 'FotoController'
  });
  $routeProvider.when('/edit/:fotoId',{
    templateUrl: 'partials/cadastra.html',
    controller: 'FotoController'
  });
  $routeProvider.otherwise({redirectTo:'/'});
});
