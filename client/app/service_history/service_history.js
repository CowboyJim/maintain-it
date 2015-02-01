'use strict';

angular.module('maintainItApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/service_history', {
        templateUrl: 'app/service_history/service_history.html',
        controller: 'ServiceHistoryCtrl'
      });
  });
