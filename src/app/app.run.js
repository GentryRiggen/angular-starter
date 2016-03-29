(function () {
  'use strict';

  angular
    .module('angularStarter')
    .run(mdlUpgrade)
    .run(runBlock);

  /** @ngInject */
  function mdlUpgrade($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
      $timeout(function () {
        componentHandler.upgradeAllRegistered();
      });
    });
  }

  /** @ngInject */
  function runBlock($rootScope, $state, UserService) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (angular.isDefined(toState.data) &&
        angular.isDefined(toState.data.requireLogin) &&
        toState.data.requireLogin === false) {
        return;
      }

      UserService.getCurrentUser().then(
        function (currentUser) {
          var userIsAdmin = _.indexOf(currentUser.roles, "Admin" > 0);
          // Check if state requires user to be in certain role (Admin trumps everything)
          if (!userIsAdmin &&
            angular.isDefined(toState.data) &&
            angular.isDefined(toState.data.allowedRoles) &&
            toState.data.allowedRoles.length > 0) {

            var allowedThrough = false;
            angular.forEach(toState.data.allowedRoles, function (role) {
              if (_.contains(currentUser.roles, role)) {
                allowedThrough = true;
              }
            });

            if (!allowedThrough) {
              // If we get this far, they don't have access
              event.preventDefault();
              $state.go('login');
            }
          }
        },
        function () {
          event.preventDefault();
          // Route to login
          $state.go('login');
        }
      );
    });
  }
})();
