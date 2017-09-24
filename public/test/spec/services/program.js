'use strict';

describe('Service: program', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var program;
  beforeEach(inject(function (_program_) {
    program = _program_;
  }));

  it('should do something', function () {
    expect(!!program).toBe(true);
  });

});
