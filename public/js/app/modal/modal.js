define([
  'angular',
  'text!./templates/modal.html',
  'bootstrap'
], function (ng, modalHtml) {
  ng.module('modal', ['ui.bootstrap'])
    .controller('ModalController', function ($scope, $modalInstance, ModalFactory) {
      $scope.data = ModalFactory.data;

      ModalFactory.getContent();

      $scope.close = function () {
        $modalInstance.close();
        ModalFactory.clearContent();
      };
    })
    .factory('ModalFactory', function ($http, $q, $modal, $log) {
      var Factory = {
        data: {
          content: ''
        },

        openModal: function () {
          return $modal.open({
            controller: 'ModalController',
            template: modalHtml
          });
        },

        clearContent: function () {
          Factory.data.content = '';
        },

        getContent: function () {
          var deferred = $q.defer();

          $http
            .get('/content')
            .success(function (data) {
              Factory.data.content = data;
              deferred.resolve(data);
            })
            .error(function () {
              $log.error('oops!');
              deferred.reject();
            });

          return deferred.promise;
        }
      };

      return Factory;
    });
});
