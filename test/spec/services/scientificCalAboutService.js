'use strict';

describe('Service: scientificCalService', function() {

	var scientificCalService;
	beforeEach(module('calculatorApp'));

	beforeEach(inject(function(_scientificCalService_) {
		scientificCalService = _scientificCalService_;
		scientificCalService.powOne = 0;
		scientificCalService.powTwo = 0;
		scientificCalService.result = null;
	}));

	it('should init some key values', function() {
		expect(scientificCalService.powOne).toBe(0);
		expect(scientificCalService.powTwo).toBe(0);
		expect(scientificCalService.result).toBe(null);
	});
});