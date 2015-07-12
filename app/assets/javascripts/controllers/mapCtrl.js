(function() {
	var app = angular.module('mapCtrl',['ngRoute', 'ngResource', 'ui.bootstrap', 'mapService','ngMaterial']);

	app.controller("MapController", ['$resource', 'Vtransaction', 'User', '$location', 
			function($resource, Vtransaction, User, $location){

				this.transactions = {};
				this.defaultTransactionType = "All";

				this.index = function(){
					this.transactions = Vtransaction.query();
					this.transactions.$promise.then(function(result){
						this.transactions = result;
					});

					this.users = User.query();
					this.users.$promise.then(function(result2){
						this.users = result2;
					});

				};

		}]);


})();