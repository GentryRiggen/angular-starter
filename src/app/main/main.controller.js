(function() {
  'use strict';

  angular
    .module('angularStarter')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.stuff = ['Apple', 'Oranges', 'Bananas'];

    function init() {}

    init();
  }
})();
