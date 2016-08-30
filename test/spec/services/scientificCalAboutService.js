'use strict';

describe('Service: scientificCalService', function() {

	var scientificCalService;
	beforeEach(module('calculatorApp'));

	beforeEach(inject(function(_scientificCalService_) {
		scientificCalService = _scientificCalService_;
	}));

	it('should init some key values', function() {
		// given
		scientificCalService.powOne = 0;
		scientificCalService.powTwo = 0;
		scientificCalService.result = null;
		// then
		expect(scientificCalService.powOne).toBe(0);
		expect(scientificCalService.powTwo).toBe(0);
		expect(scientificCalService.result).toBe(null);
	});
});