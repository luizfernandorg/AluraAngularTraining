myApp.controller('FotoController', function($scope, $http, $routeParams){
  $scope.foto = {};

  var fotoAtual = $routeParams.fotoId;

  if(fotoAtual){
    $http.get('/v1/fotos/' + fotoAtual)
    .success(function(foto){
      $scope.foto = foto;
    }).error(function(error){
      console.log(error);
      $scope.mensagem = 'Erro ao obter a foto';
    });
  }

  $scope.testeFoto = function(){
    if($scope.foto.url){
      return true;
    }
    return false;
  };
  $scope.mensagem = '';

  $scope.submeter = function(){
    if($scope.formulario.$valid){
      if($routeParams.fotoId){
        $http.put("/v1/fotos/"+$scope.foto._id, $scope.foto)
        .success(function(){
          $scope.mensagem = "Foto alterada com sucesso!";
        }).error(function(error){
          $scope.mensagem = 'Não foi possível alterar';
        });
      }else{
        $http.post("v1/fotos", $scope.foto).success(function(){
          $scope.mensagem = "Foto adicionada com sucesso";
        }).error(function(e){
          $scope.mensagem = "Não foi possível cadastrar a foto";
        });
        $scope.foto = {};
        $scope.testeFoto()
      }
    }
  }
  $scope.limpar = function(){
    $scope.foto = {};
    $scope.testeFoto();
  }
});
//http://localhost:3000/images/guitar-946701_1280.jpg
