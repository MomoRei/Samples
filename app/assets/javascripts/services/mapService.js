(function() {
	var app = angular.module('mapService',['ngRoute', 'ngResource']);


	app.factory("Vtransaction", ['$resource',function($resource){
		return $resource('/vtransactions/:id/:action', {}, {
			query: { method: 'GET', isArray:true }
		});

	}]);

	app.factory("User", ['$resource',function($resource){
		return $resource('/users/:id/:action', {}, {
			query: { method: 'GET', isArray:true }
		});

	}]);

})();