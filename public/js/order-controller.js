angular.module('myApp-order-controller', [])
.controller('customersCtrl', function($scope, $http) {
	
	$http.get("/getData").success(function(response) {
		$scope.names = response;
	});
});