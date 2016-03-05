angular.module('meusServicos', ['ngResource']).factory('recursoFoto', function($resource){
  return $resource('v1/fotos/:fotoId', null, {
    'update' : {
      method: 'PUT'
    }
  });
}).factory('cadastrarFotos', function(recursoFoto, $q, $rootScope){
  var service = {};
  var evento = 'fotoCadastrada';
  var displayMsg = 'mostraMensagem';
  service.cadastrar = function(foto){
    return $q(function(resolve, reject){
      if(foto._id){
        recursoFoto.update({fotoId: foto._id}, foto, function(){
          $rootScope.$broadcast(evento);
          $rootScope.$broadcast(displayMsg);
          resolve({
            mensagem : "Foto '" + foto.titulo + "' alterada com sucesso!",
            inclusao : false
          });
        }, function(error){
          reject({
            mensagem : 'Não foi possível alterar'
          });
        });
      }else{
        recursoFoto.save(foto, function(){
          resolve({mensagem : "Foto adicionada com sucesso"});
          $rootScope.$broadcast(displayMsg);
          $rootScope.$broadcast(evento);
        }, function(error){
          console.log(error);
          reject({mensagem : "Não foi possível cadastrar a foto"});
        });
      }
    });
  }
  return service;
});
