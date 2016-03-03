myApp.controller('FotoController', function($scope, $http, $routeParams){
  $scope.foto = {};
  var fotoAtual = $routeParams.fotoId || '';
  if(fotoAtual){
    $http.get('/v1/fotos/' + fotoAtual)
    .success(function(foto){
      $scope.foto = foto;
      console.log(foto);
    }).error(function(error){
      console.log('Erro ao obter a foto');
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
          console.log("Alterado")
        }).error(function(error){
          console.log('erro');
        });
      }else{
        $http.post("v1/fotos", $scope.foto).success(function(){
          $scope.mensagem = "adicionada com sucesso";
        }).error(function(e){
          $scope.mensagem = "erro ao cadastrar";
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
