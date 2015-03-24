var app = angular.module('App', []).controller('customersCtrl',
			function($scope, $http) {
				$http.get("/getData").success(function(response) {

					$scope.names = response;
				});
			});