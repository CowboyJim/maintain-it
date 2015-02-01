'use strict';

describe('Controller: ServiceHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('maintainItApp'));

  var ServiceHistoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceHistoryCtrl = $controller('ServiceHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
