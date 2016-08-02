(function() {

  'use strict';

  angular
    .module('daseda')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['firebaseService','$firebaseArray'];

  function homeCtrl(firebaseService,$firebaseArray) {
    
    var vm = this;

    vm.productos = $firebaseArray(firebaseService.productos)

    console.log(vm.productos);

  }

})();