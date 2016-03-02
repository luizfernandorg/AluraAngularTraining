myApp.controller('FotosController', function($scope, $http){
  // $scope.foto = {
  //   url:'http://www.fundosanimais.com/Minis/leao.jpg',
  //   titulo:'Leão'
  // }
  $scope.fotos = [];
  // $scope.filtro = ''; //para este caso é opcional
  // var promise = $http.get("/v1/fotos");
  // promise.then(function(resultado){
  //   $scope.fotos = resultado.data;
  // }).catch(function(error){
  //   console.log(error);
  // });
  var promise = $http.get("/v1/fotos");
  promise.success(function(resultado){
    $scope.fotos = resultado;
  }).error(function(error){
    console.log(error);
  });
});
