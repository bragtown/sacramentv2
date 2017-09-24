'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:SetupCtrl
 * @description
 * # SetupCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('SetupCtrl', function ($scope, program) {
  	$scope.curP = program.getProgram()
    console.log($scope.curP)
    $scope.canCopy = program.canCopy()
    //$scope.curP.date = new Date($scope.curP.date)
    $scope.leadership = program.getLeadership()
  	$scope.removeYouthSpeaker = function(index){
  		$scope.curP.youthSpeakers.splice(index, 1)	
  	}
    $scope.addYouthSpeaker = function(){
      console.log($scope.curP.youthSpeakers)
      if($scope.curP.youthSpeakers == undefined)
        $scope.curP.youthSpeakers = []
      $scope.curP.youthSpeakers.push({name:''})
    }
  	$scope.removePSpeaker = function(index){
  		$scope.curP.pSpeakers.splice(index, 1)	
  	}
    $scope.addPSpeaker = function(){
      if($scope.curP.pSpeakers == undefined)
        $scope.curP.pSpeakers = []
      $scope.curP.pSpeakers.push({name:''})
    }
  	$scope.removeASpeaker = function(index){
  		$scope.curP.aSpeakers.splice(index, 1)	
  	}
    $scope.addASpeaker = function(){
      if($scope.curP.aSpeakers == undefined)
        $scope.curP.aSpeakers = []
      $scope.curP.aSpeakers.push({name:''})
    }

  	$scope.removeReminder = function(index){
  		$scope.curP.reminders.splice(index, 1)	
  	}
    $scope.addReminder = function(){
      if($scope.curP.reminders == undefined)
        $scope.curP.reminders = []
      $scope.curP.reminders.push({title:'', data:[{name:'',info:''}]})
    }
  	$scope.removeReminderDatum = function(index,jindex){
  		$scope.curP.reminders[index].data.splice(jindex, 1)	
  	}
    $scope.addReminderDatum = function(index){
      if($scope.curP.reminders == undefined)
        $scope.curP.reminders = []
      $scope.curP.reminders[index].data.push({name:'', info:''})
    }

  	$scope.removeSReminder = function(index){
  		$scope.curP.sReminders.splice(index, 1)	
  	}
    $scope.addSReminder = function(){
      if($scope.curP.sReminders == undefined)
        $scope.curP.sReminders = []
      $scope.curP.sReminders.push({name:''})
    }

  	$scope.removeAnnouncement = function(index){
  		$scope.curP.announcements.splice(index, 1)	
  	}
    $scope.addAnnouncement = function(){
      if($scope.curP.announcements == undefined)
        $scope.curP.announcements = []
      $scope.curP.announcements.push({name:'', data:''})
    }
  	$scope.removeSAnnouncement = function(index){
  		$scope.curP.sAnnouncements.splice(index, 1)	
  	}
    $scope.addSAnnouncement = function(){
      if($scope.curP.sAnnouncements == undefined)
        $scope.curP.sAnnouncements = []
      $scope.curP.sAnnouncements.push({name:'', data:''})
    }

    $scope.removeLeader = function(index) {
      $scope.leadership.leadership.splice(index, 1)
    }
    $scope.addLeader = function(){
      if($scope.leadership.leadership == undefined){
        $scope.leadership.leadership = []
      }
      $scope.leadership.leadership.push({person:'',phone:''})
    }
    $scope.submit = function () {

      program.postProgram($scope.curP);
      program.updateLeadership($scope.leadership.leadership);
    }
    $scope.copy = function(){
      $scope.curP = program.getProgram(program.copy())
      $scope.canCopy = false
    }
    $scope.print = function(){
      program.printView()
    }
  });
