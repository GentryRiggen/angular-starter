(function () {
  'use strict';
  angular
    .module('angularStarter')
    .service('UserService', UserService);

  /** @ngInject */
  function UserService(API_URL, $http, $q) {
    var url = API_URL + '/users';
    
    var getAll = function () {
      return $http.get(url);
    };

    var getCurrentUser = function () {
      var dfd = $q.defer();
      dfd.resolve({
        first_name: 'Gentry',
        last_name: 'Riggen',
        roles: ['admin', 'user']
      });
      return dfd.promise;
    };
    
    return {
      getAll: getAll,
      getCurrentUser: getCurrentUser
    };
  }
})();
