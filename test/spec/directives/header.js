'use strict';

describe('directive: header', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $compile;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should show the right attr of header directive', function($compile) {
		var header = $compile('<header></header>')($rootScope);
		$rootScope.$digest();
		
		expect(header.restrict).toBe("EA");
		expect(header.replace).toBe(true);
		expect(header.templateUrl).toBe('../../views/nav/header.html');
	});
});



