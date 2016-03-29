(function() {
  'use strict';

  angular
    .module('angularStarter')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(UserService) {
    var vm = this;
    vm.users = [];

    function init() {
      UserService.getAll()
        .then(function (resp) {
          
        })
        .catch(function () {
          console.log('Failed to get users');
        });
    }

    init();
  }
})();
