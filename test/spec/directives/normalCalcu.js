'use strict';
describe('Controller: MainCtrl', function() {

    beforeEach(module('calculatorApp'));

    var MainCtrl, scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show the right attr of normalCalcu directive', function($compile) {
		var normalCalcu = $compile('<normal-calcu></normal-calcu>')(scope);
		scope.$digest();
		expect(normalCalcu.replace).toBe(true);
		expect(normalCalcu.templateUrl).toBe('../../views/calcu/normal.html');
	});
});