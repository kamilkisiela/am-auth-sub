angular.module('app', [
    'angular-meteor',
    'angular-meteor.auth',
    'ui.router'
  ])
  .config(config)
  .component('app', {
    restrict: 'E',
    templateUrl: 'client/app/app.html',
    controllerAs: 'vm',
    controller() {}
  });

// bootstrap angular
angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
});

// config
function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
