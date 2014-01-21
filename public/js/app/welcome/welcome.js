define([
  'angular',
  'text!./templates/welcome.html',
  'modal/modal'
], function (ng, welcomeHtml) {
  ng.module('welcome', ['modal'])
    .controller('WelcomeController', function ($scope, $log, ModalFactory) {
      $scope.hello = function (name) {
        $log.log('hello ' + name);
      };

      $scope.openModal = function () {
        ModalFactory.openModal();
      };
    })
    .directive('welcome', function () {
      return {
        restrict: 'A',
        template: welcomeHtml,
        controller: 'WelcomeController',
        link: function (scope) {
          scope.hello('world');
        }
      };
    });
});
