define([
  'angular',
  'text!templates/header.html',
  'text!templates/loading.html',
  'welcome/welcome'
], function (ng, headerHtml, loadingHtml) {
  ng.module('app', ['welcome'])
    .directive('header', function ($log) {
      return {
        restrict: 'A',
        template: headerHtml,
        link: function () {
          $log.log('header ready');
        }
      };
    })
    .directive('loading', function () {
      return {
        restrict: 'A',
        template: loadingHtml
      };
    });
});
