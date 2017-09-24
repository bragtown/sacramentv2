'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MobileCtrl', function ($scope,$location, program) {
  	$scope.location = $location.url().substring(8)
  	var loc = $location.url().substring(8)
  	program.getMobile(loc);

  });
