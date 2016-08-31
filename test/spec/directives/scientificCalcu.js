'use strict';

describe('directive: scientificCalcu', function() {

    beforeEach(module('calculatorApp'));

    var scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show the right attr of scientificCalcu directive', function($compile) {
		var scientificCalcu = $compile('<scientific-calcu></scientific-calcu>')(scope);
		scope.$digest();
        
        expect(normalCalcu.restrict).toBe("EA");
		expect(scientificCalcu.replace).toBe(true);
		expect(scientificCalcu.templateUrl).toBe('../../views/calcu/scientific.html');
	});
});