(function(){

	'use strict';

	angular
	.module('daseda')
	.directive('footerApp',footerApp);

	function footerApp() {

		var directiva = {
			restrict:'E',
			templateUrl: 'views/footer.html'
		}

		return directiva;

	};

})();

