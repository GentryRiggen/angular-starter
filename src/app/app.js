(function() {
  'use strict';

  angular
    .module('angularStarter', [
      'ngAnimate',
      'ngMessages',
      'ngSanitize',
      'ngAria',
      'ui.router'
    ])
    .constant('moment', window.moment)
    .config(routerConfig)
    .run(runBlock);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.tmpl.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

  /** @ngInject */
  function runBlock() {
  }
})();
