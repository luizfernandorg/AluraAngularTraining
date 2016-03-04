angular.module('meusServicos', ['ngResource']).factory('recursoFoto', function($resource){
  return $resource('v1/fotos/:fotoId', null, {
    'update' : {
      method: 'PUT'
    }
  });
}).factory('cadastrarFotos', function(recursoFoto, $q){
  var service = {};
  service.cadastrar = function(foto){
    return $q(function(resolve, reject){
      if(foto._id){
        recursoFoto.update({fotoId: foto._id}, foto, function(){
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
        }, function(error){
          console.log(error);
          reject({mensagem : "Não foi possível cadastrar a foto"});
        });
      }
    });
  }
  return service;
});
