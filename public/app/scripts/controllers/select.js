'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:SelectCtrl
 * @description
 * # SelectCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('SelectCtrl', function ($scope, program) {
  	$scope.programs = program.getPrograms();
  	$scope.newProgram = function(){
  		program.setProgram(undefined);
  	}
  	$scope.gotoProgram = function(index){
  		program.setProgram(index);
  	}
  });
