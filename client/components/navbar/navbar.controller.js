'use strict';

angular.module('maintainItApp')
    .controller('NavbarCtrl', function($scope, $location) {
        $scope.menu = [{
                'title': 'Home',
                'link': '/'
            }, {
                'title': 'Reminders',
                'link': '/reminders'
            }, {
                'title': 'Service History',
                'link': '/service_history'
            }

        ];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });