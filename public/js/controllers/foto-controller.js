myApp.controller('FotoController', function($scope, $http){
  $scope.foto = {};
  $scope.testeFoto = function(){
    if($scope.foto.url){
      return true;
    }
    return false;
  };
  $scope.mensagem = '';
  
  $scope.submeter = function(){
    if($scope.formulario.$valid){
      $http.post("v1/fotos", $scope.foto).success(function(){
        $scope.mensagem = "adicionada com sucesso";
      }).error(function(e){
        $scope.mensagem = "erro ao cadastrar";
      });
      $scope.foto = {};
      $scope.testeFoto()
    }
  }
  $scope.limpar = function(){
    $scope.foto = {};
    $scope.testeFoto();
  }
});
//http://localhost:3000/images/guitar-946701_1280.jpg
