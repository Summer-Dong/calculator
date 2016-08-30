'use strict';

describe('Service: normalCalService', function() {

	var normalCalService;
	beforeEach(module('calculatorApp'));

	beforeEach(inject(function(_normalCalService_) {
		normalCalService = _normalCalService_;
	}));

	it('should init some key values', function() {
		// given
		normalCalService.inputs = "";
		normalCalService.results = "20+30";
		normalCalService.equalFlag = 0;
		normalCalService.typeInFlag = 0;
		normalCalService.slipFlag = true;
		normalCalService.symbol = null;
		// when
		// normalCalService.slip();
		normalCalService.delete();
		normalCalService.numClick("");
		normalCalService.numClick("1");
		// then
		expect(normalCalService.inputs).toBe("");
		expect(normalCalService.results).toBe("20+31");
		expect(normalCalService.equalFlag).toBe(0);
		expect(normalCalService.typeInFlag).toBe(0);
		expect(normalCalService.symbol).toBe(null);
		expect(normalCalService.slipFlag).toBe(true);
	});
});