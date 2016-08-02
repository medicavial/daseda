(function(){

	'use strict';

	angular
	.module('daseda')
	.config(config);

	config.$inject = ['$routeProvider', '$locationProvider','$httpProvider','$compileProvider'];

	function config($routeProvider, $locationProvider,$httpProvider,$compileProvider) {

		$compileProvider.debugInfoEnabled(true);      

		$routeProvider
		.when('/',{
			templateUrl :'views/home.html',
			controller:'homeCtrl',
			controllerAs:'hm'
		})
		
		.when('/nosotros',{
			url:'nosotros',
			templateUrl :'views/nosotros.html'
		})

		.when('/productos',{
			url:'productos',
			templateUrl :'views/productos.html'
		})


		.when('/servicios',{
			url:'servicios',
			templateUrl :'views/servicios.html'
		})

		.when('/contacto',{
			url:'contacto',
			templateUrl :'views/contacto.html'
		})

		.when('/producto/:id/detalle',{
			templateUrl :'views/detalle.html',
			controller: function($routeParams){
				console.log($routeParams);
			}
		})

		.when('/error', {
			templateUrl: "views/error.html"
		})

		.otherwise({
		    redirectTo: "/error"
		});

		$locationProvider.html5Mode(true);

	  	
	};

})();
