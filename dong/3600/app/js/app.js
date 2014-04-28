'use strict';


// Declare app level module which depends on filters, and services
angular.module('3600', [
  'ngAnimate',
  'ngRoute',
  '3600.filters',
  '3600.services',
  '3600.directives',
  '3600.controllers'
]).
config(['$routeProvider', function($routeProvider) {

}]).
controller('testctrl', ['$window','$scope', function($window,$scope){

		$scope.windowInnerWidthFun = function(){
			$scope.windowInnerWidth = $window.innerWidth;
		};
	
}]);
