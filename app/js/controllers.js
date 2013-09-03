'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'angularFire',function MyCtrl1($scope, angularFire)  {
   var url = 'https://hyforce.firebaseio.com/merchandise';
   var promise = angularFire(url, $scope, 'merchandiseList', {});
  }])
  .controller('MyCtrl2', [function() {

  }]);