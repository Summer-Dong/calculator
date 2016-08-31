'use strict';

describe('directive: footer', function() {

    beforeEach(module('calculatorApp'));

    var scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show the right attr of footer directive', function($compile) {
		var footer = $compile('footer></footer>')(scope);
		scope.$digest();
		
		expect(footer.restrict).toBe("EA");
		expect(footer.replace).toBe(true);
		expect(footer.templateUrl).toBe('../../views/nav/footer.html');
	});
});