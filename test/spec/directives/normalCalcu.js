'use strict';

describe('directive: normalCalcu', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $compile;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should show the right attr of normalCalcu directive', function($compile) {
		var normalCalcu = $compile('<normal-calcu></normal-calcu>')($rootScope);
		$rootScope.$digest();
		
		expect(normalCalcu.restrict).toBe("EA");
		expect(normalCalcu.replace).toBe(true);
		expect(normalCalcu.templateUrl).toBe('../../views/calcu/normal.html');
	});
});



