(function(){

	'use strict';

	angular
	.module('daseda')
	.run(run);

	run.$inject = ['$rootScope','$window'];

	function run($rootScope, $window) {

		new WOW().init();

	}

})();



