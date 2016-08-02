(function(){

	'use strict';

	angular
	.module('daseda')
	.run(run);

	run.$inject = ['$rootScope', '$state','$window'];

	function run($rootScope, $state, $window) {

		new WOW().init();
		
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
				
		    // redirectTo
		    if (toState.redirectTo) {
		      event.preventDefault();
		      $state.go(toState.redirectTo, toParams);
		    }
		});

	}

})();



