'use strict';

describe('directive: header', function() {

    beforeEach(module('calculatorApp'));

    var scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show the right attr of header directive', function($compile) {
		var header = $compile('header></header>')(scope);
		scope.$digest();
		
		expect(header.restrict).toBe("EA");
		expect(header.replace).toBe(true);
		expect(header.templateUrl).toBe('../../views/nav/header.html');
	});
});