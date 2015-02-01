'use strict';

angular.module('maintainItApp')
    .controller('MainCtrl', function($scope, $http) {

        $http.get('/api/vehicles').success(function(vehicles) {
            $scope.vehicles = vehicles;
            $scope.currentVehicle = vehicles[0];
        });

        $scope.vehicleSelected = function() {
            console.log($scope.currentVehicle);
            // Here is where calls are made to grab data for this vehicle
        };

    });