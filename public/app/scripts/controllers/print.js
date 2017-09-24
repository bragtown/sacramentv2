'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:PrintCtrl
 * @description
 * # PrintCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('PrintCtrl', function ($scope, program) {
  	$scope.curP = program.getProgram()
  	$scope.getHymn = program.getHymnName
 	
  });
