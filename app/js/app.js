'use strict';
var geradorApp = angular.module('geradorApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/esquerda', {templateUrl: 'partials/esquerda.html', controller: 'EsquerdaCtrl'});
  $routeProvider.when('/direita', {templateUrl: 'partials/direita.html', controller: 'DireitaCtrl'});
  $routeProvider.otherwise({redirectTo: '/esquerda'});
}]);
