myApp.controller('FotosController', function($scope, recursoFoto){
  // $scope.foto = {
  //   url:'http://www.fundosanimais.com/Minis/leao.jpg',
  //   titulo:'Leão'
  // }
  $scope.fotos = [];
  $scope.mensagem = '';
  // $scope.filtro = ''; //for this case is optional
  // var promise = $http.get("/v1/fotos");
  // promise.then(function(resultado){
  //   $scope.fotos = resultado.data;
  // }).catch(function(error){
  //   console.log(error);
  // });
  // var promise = $http.get("/v1/fotos");
  // promise.success(function(resultado){
  //   $scope.fotos = resultado;
  // }).error(function(error){
  //   console.log(error);
  // });
  recursoFoto.query(function(fotos){
    $scope.fotos = fotos;
  }, function(error){
    console.log(error);
  });

  $scope.remover = function(foto){
    recursoFoto.delete({fotoId: foto._id}, function(){
      var index = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(index,1);
      $scope.mensagem="Foto '" + foto.titulo + "' removida com sucesso!";
    }, function(error){
      console.log(erro);
      $scope.mensagem="Erro ao remover a foto '" + foto.titulo + "'";
    });
  }
});
