'use strict';

describe('directive: footer', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $compile;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should show the right attr of footer directive', function($compile) {
		var footer = $compile('<footer></footer>')($rootScope);
		$rootScope.$digest();
		
		expect(footer.restrict).toBe("EA");
		expect(footer.replace).toBe(true);
		expect(footer.templateUrl).toBe('../../views/nav/footer.html');
	});
});



