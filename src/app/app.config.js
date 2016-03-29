(function(window) {
  'use strict';

  angular
    .module('angularStarter')
    .constant('moment', window.moment)
    .constant('_', window._)
    .constant('componentHandler', window.componentHandler)
    .constant('API_URL', 'https://api.github.com')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.tmpl.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
})(window);
