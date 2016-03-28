angular.module('app')
  .config(config)
  .component('secured', {
    restrict: 'E',
    templateUrl: 'client/secured/secured.html',
    controllerAs: 'vm',
    controller($scope) {
      $scope.viewModel(this);

      this.works = 'works';
      this.subscribe('dummy');
      this.helpers({
        dummies() {
          return DummyCollection.find({});
        }
      });
    }
  });

function config($stateProvider) {
  $stateProvider.state('secured', {
    url: '/secured',
    template: '<secured></secured>',
    resolve: {
      user($auth) {
        return $auth.requireUser();
      }
    }
  });
}
