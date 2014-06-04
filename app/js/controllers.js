'use strict';

/* Controllers */

angular.module('geradorApp').controller('EsquerdaCtrl', ['$scope','Petralha', function ($scope, Petralha) {
  	$scope.discurso = Petralha.fala();

  	$scope.geraDiscurso = function() {
  		$scope.discurso = Petralha.fala();
  	};
}]);

angular.module('geradorApp').controller('DireitaCtrl', ['$scope','Coxinha', function ($scope, Coxinha) {
  	$scope.discurso = Coxinha.fala();

  	$scope.geraDiscurso = function() {
  		$scope.discurso = Coxinha.fala();
  	};
}]);