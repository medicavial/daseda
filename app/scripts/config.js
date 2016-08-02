(function(){

	'use strict';

	angular
	.module('daseda')
	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider','$compileProvider'];

	function config($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider,$compileProvider) {

		$compileProvider.debugInfoEnabled(true);      

		$urlRouterProvider.otherwise("/error");

		$urlRouterProvider
    	.when('/', '/home')

		$stateProvider

		.state('site', {
			url: '/',
			templateUrl: 'views/base.html',
			abstract: true
		})

		.state('site.home',{
			url:'home',
			templateUrl :'views/home.html',
			controller:'homeCtrl',
			controllerAs:'hm'
		})
		
		.state('site.nosotros',{
			url:'nosotros',
			templateUrl :'views/nosotros.html'
		})

		.state('site.productos',{
			url:'productos',
			templateUrl :'views/productos.html'
		})


		.state('site.servicios',{
			url:'servicios',
			templateUrl :'views/servicios.html'
		})

		.state('site.contacto',{
			url:'contacto',
			templateUrl :'views/contacto.html'
		})

		.state('site.producto',{
			url:'producto/:producto',
			templateUrl :'views/detalle.html',
			controller: function($stateParams){
				console.log($stateParams);
			}
		})

		.state('admin', {
			url: "/admin",
			templateUrl: "views/admin/admin.html",
			abstract: true
		})

		.state('login', {
			url: "/login",
			templateUrl: 'views/admin/login.html'
		})

		.state('error', {
			url: "error",
			templateUrl: "views/error.html"
		})

		$locationProvider.html5Mode(true);

	  	
	};

})();
