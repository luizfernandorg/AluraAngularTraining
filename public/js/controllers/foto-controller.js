myApp.controller('FotoController', function($scope, cadastrarFotos, recursoFoto, $routeParams){
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
      cadastrarFotos.cadastrar($scope.foto).then(function(dados){
        $scope.mensagem = dados.mensagem;
        if(dados.inclusao) limpar();
      }).catch(function(dados){
        $scope.mensagem = error.mensagem;
      });
    }
  }

  $scope.limpar = function(){
    $scope.foto = {};
    $scope.testeFoto();
  }
});
//http://localhost:3000/images/guitar-946701_1280.jpg
