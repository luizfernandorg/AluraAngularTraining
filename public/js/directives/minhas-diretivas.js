angular.module('minhaDirectiva', [])
.directive('meuPainel', function(){
  var ddo = {};
  ddo.restrict = 'AE';
  ddo.scope = {
    titulo: '@'
  }
  ddo.transclude = true;
  ddo.templateUrl = 'meu-painel.html';
  return ddo;
});
