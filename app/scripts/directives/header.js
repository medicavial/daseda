(function(){

	'use strict';

	angular
	.module('daseda')
	.directive('headerApp',headerApp);

	function headerApp() {

		var directiva = {
			restrict:'E',
			templateUrl: 'views/header.html',
			controller:menuCtrl,
			controllerAs:'vm'
		}

	  	return directiva;
	};

	menuCtrl.$inject = [];

	function menuCtrl(){

		$(".button-collapse").sideNav();

		var vm = this;
		vm.busqueda = false;
		vm.resultadosExpress = false;
		vm.muestrabusqueda = muestrabusqueda;
		vm.buscaResultados = buscaResultados;
		vm.muestraMenu = muestraMenu;


		function muestrabusqueda (){
			vm.busqueda = !vm.busqueda;
			vm.resultadosExpress = false;
		}

		function muestraMenu (){
			$mdSidenav('left').toggle();
		}

		function buscaResultados(){
			vm.resultadosExpress = true;
		}
	}

})();

