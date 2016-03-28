angular.module('app')
  .config(config)
  .component('login', {
    restrict: 'E',
    templateUrl: 'client/login/login.html',
    controllerAs: 'vm',
    controller($state) {
      this.login = () => {
        Meteor.loginWithPassword('angular', 'angular', (error) => {
          if (error) {
            console.error(error);
          } else {
            $state.go('secured');
          }
        });
      };

      this.logout = () => {
        Meteor.logout();
      };
    }
  });

function config($stateProvider) {
  $stateProvider.state('login', {
    url: '/',
    template: '<login></login>'
  });
}
