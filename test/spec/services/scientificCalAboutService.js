'use strict';

describe('Service: scienServ', function() {

	beforeEach(module('calculatorApp'));
	
	var scienServ;
	
	beforeEach(inject(function(_scientificCalService_) {
		scienServ = _scientificCalService_;
	}));

	it('should init some key values', function() {
		// given
		scienServ.powOne = 0;
		scienServ.powTwo = 0;
		scienServ.result = null;
		// then
		expect(scienServ.powOne).toBe(0);
		expect(scienServ.powTwo).toBe(0);
		expect(scienServ.result).toBe(null);
	});
});