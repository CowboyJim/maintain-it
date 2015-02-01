'use strict';

angular.module('maintainItApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reminders', {
        templateUrl: 'app/reminders/reminders.html',
        controller: 'RemindersCtrl'
      });
  });
