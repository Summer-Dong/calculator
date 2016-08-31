'use strict';

describe('directive: whenActive', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $compile;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should show the right attr of whenActive directive', function($compile) {
		var whenActive = $compile('<when-active></when-active>')($rootScope);
		$rootScope.$digest();
		
		expect(whenActive.attr('class')).toBe('active');
	});
});



