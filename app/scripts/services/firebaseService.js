
(function() {
  'use strict';

  angular
    .module('daseda')
    .factory('firebaseService', firebaseService);

  function firebaseService() {

    var root = firebase.database().ref();
    var storage = firebase.storage().ref();

    var service = {
      root: root,
      productos: root.child('productos'),
      categorias: root.child('categorias'),
      subcategorias: root.child('subcategorias'),
      imagenes: imagenes
    };

    function imagenes(producto){
      return storage.child('productos/'+producto);
    }

    return service;
  }

})();