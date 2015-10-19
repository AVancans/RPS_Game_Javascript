'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('RPSApp'));

  var MainCtrl,	scope,	RPS_Service;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {  scope = $rootScope.$new();
    RPS_Service = $injector.get('RPS_Service');

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

  }));


  it('should pass', function () {
	  expect(1).toBe(1);
  });

});
