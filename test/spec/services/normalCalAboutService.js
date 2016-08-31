'use strict';

describe('Service: normalServ', function() {

	beforeEach(module('calculatorApp'));

	var normalServ;
	
	beforeEach(inject(function(_normalCalService_) {
		normalServ = _normalCalService_;
	}));

	it('should init some key values', function() {
		// given
		normalServ.inputs = "";
		normalServ.results = "20+30";
		normalServ.equalFlag = 0;
		normalServ.typeInFlag = 0;
		normalServ.slipFlag = true;
		normalServ.symbol = null;
		// when
		// normalServ.slip();
		normalServ.delete();
		normalServ.numClick("");
		normalServ.numClick("1");
		// then
		expect(normalServ.inputs).toBe("");
		expect(normalServ.results).toBe("20+31");
		expect(normalServ.equalFlag).toBe(0);
		expect(normalServ.typeInFlag).toBe(0);
		expect(normalServ.symbol).toBe(null);
		expect(normalServ.slipFlag).toBe(true);
	});
});