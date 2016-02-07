(function () {
    'use strict';
    angular
        .module('angularStarter')
        .service('MainService', MainService);

    /** @ngInject */
    function MainService($http) {
        var get = function () {
            return $http.get('http://google.com');
        };

        return {
          get: get
        };
    }
})();
