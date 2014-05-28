'use strict';

/* Controllers */

geradorApp.controller('MainCtrl', ['$scope','Militante', function ($scope, Militante) {
  	$scope.discurso = Militante.fala();

  	$scope.geraDiscurso = function() {
  		$scope.discurso = Militante.fala();
  	};
}]);