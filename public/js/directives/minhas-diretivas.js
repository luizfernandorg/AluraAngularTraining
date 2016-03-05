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
}).directive('meuBotaoPerigo', function(){
  var ddo = {};
  ddo.restrict = 'E';
  ddo.scope = {
    nome: '@',
    acao: '&'
  }
  ddo.template = '<button type="button" name="button" class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';
  return ddo;
}).directive('meuFoco', function(){
  var ddo = {}

  ddo.restrict = 'A'

  ddo.scope = {
    focado : '='
  }

  ddo.link = function(scope, element){
    // scope.$watch('focado', function(){
    //   if(scope.focado){
    //     element[0].focus()
    //     scope.focado = false;
    //   }
    // });
    scope.$on('fotoCadastrada', function(){
      element[0].focus();
    });
  };

  return ddo;
}).directive('removeMsg', function(){
  var ddo = {};
  ddo.restrict = "A";
  ddo.scope = {
    mensagem : "="
  }
  ddo.link = function(scope, element){
    scope.$on('');
  }
});
