myApp.controller('FotoController', function($scope, reccursoFoto, $routeParams){
  $scope.foto = {};
  $scope.mensagem = '';

  var fotoAtual = $routeParams.fotoId;

  if(fotoAtual){
    recursoFoto.get({fotoId: fotoAtual}, function(foto){
      $scope.foto = foto;
    }, function(error){
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

  $scope.submeter = function(){
    if($scope.formulario.$valid){
      if(fotoAtual){
        recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
          $scope.mensagem = "Foto alterada com sucesso!";
        }, function(error){
          $scope.mensagem = 'Não foi possível alterar';
        });
      }else{
        recursoFoto.save($scope.foto, function(){
          $scope.mensagem = "Foto adicionada com sucesso";
          $scope.limpar();
        }, function(error){
          $scope.mensagem = "Não foi possível cadastrar a foto";
        });
      }
    }
  }

  $scope.limpar = function(){
    $scope.foto = {};
    $scope.testeFoto();
  }
});
//http://localhost:3000/images/guitar-946701_1280.jpg
