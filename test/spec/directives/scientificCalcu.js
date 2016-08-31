'use strict';

describe('directive: scientificCalcu', function() {

    beforeEach(module('calculatorApp'));

    var $rootScope, $compile;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should show the right attr of scientificCalcu directive', function($compile) {
        var scientificCalcu = $compile('<scientific-calcu></scientific-calcu>')($rootScope);
        $rootScope.$digest();
        
        expect(scientificCalcu.restrict).toBe("EA");
        expect(scientificCalcu.replace).toBe(true);
        expect(scientificCalcu.templateUrl).toBe('../../views/calcu/scientific.html');
    });
});



