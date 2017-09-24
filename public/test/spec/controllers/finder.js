'use strict';

describe('Controller: FinderCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var FinderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FinderCtrl = $controller('FinderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FinderCtrl.awesomeThings.length).toBe(3);
  });
});
