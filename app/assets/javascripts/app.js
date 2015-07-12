(function() {
	var app = angular.module('app',['ngRoute', 'ngResource', 'mapApp','ui.bootstrap', 'mapCtrl','mapService','ngMaterial']);

	app.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider){
			$routeProvider
			.when('/locations',
			{
				templateUrl:  "assets/home.html",
			})
			.when('/',
			{
				templateUrl:  "assets/home.html",
			});
			$locationProvider.html5Mode(true);
		}]);
})();