var App = angular.module('myApp', ['ui.router']);
App.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

  $stateProvider
	.state('home', {
            url: '/home',
            templateUrl: '/home'
        })
	.state('order', {
            url: '/order',
            templateUrl: '/order'
        })
	.state('outlets', {
            url: '/outlets',
            templateUrl: '/outlets'
        })

	.state('contactUs', {
            url: '/contactUs',
            templateUrl: 'n.html'
        });	
}]);