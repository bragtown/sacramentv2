'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('AccountCtrl', function ($scope, userManager) {
  	$scope.user = userManager.getUser();
    $scope.updateUser = function(){
    	console.log('update')
    	$scope.userRes = userManager.update($scope.user);
    }
    $scope.updateOrg = function(){
    	console.log("update")
    	userManager.updateOrg($scope.user.org)
    }
  });
