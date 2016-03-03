angular.module('minhasDirectivas', [])
.directive('meuPainel', function(){
  var ddo = {};
  ddo.restrict = 'AE';
  ddo.scope = {
    titulo: '@'
  }
  ddo.transclude = true;
  ddo.templateUrl = 'meu-painel.html';
  return ddo;
}).directive('minhaFoto', function(){
  var ddo = {};
  ddo.restrict = 'AE';
  ddo.scope = {
    url : '@src',
    titulo: '@alt'
  }
  ddo.templateUrl = 'partials/minha-foto.html';
  return ddo;
});
