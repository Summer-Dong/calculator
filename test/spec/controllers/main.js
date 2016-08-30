'use strict';

describe('Controller: MainCtrl', function() {

    beforeEach(module('calculatorApp'));

    var MainCtrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', function(normalCalService, scientificCalService) {
            $scope: scope
        });
    }));

    it('should show the right results for the inputs of 2×8', function() {
        // when 
        MainCtrl.normalServ.numClick("2");
        MainCtrl.symbolClick("×");
        MainCtrl.normalServ.numClick("8");
        MainCtrl.equal();
        // then
        expect(MainCtrl.normalServ.inputs).toBe("2×8=");
        expect(MainCtrl.normalServ.results).toBe(16);
        expect(MainCtrl.normalServ.slipFlag).toBe(true);
        expect(MainCtrl.normalServ.typeInFlag).toBe(0);
        expect(MainCtrl.normalServ.equalFlag).toBe(1);
    });
    it('should show the right results for the inputs of 2^8', function() {
        // when 
        MainCtrl.normalServ.slip();
        MainCtrl.normalServ.numClick("2");
        MainCtrl.symbolClick("^");
        MainCtrl.normalServ.numClick("8");
        MainCtrl.equal();
        // then
        expect(MainCtrl.normalServ.inputs).toBe("2^8=");
        expect(MainCtrl.normalServ.results).toBe(256);
        expect(MainCtrl.scienServ.powOne).toBe("2");
        expect(MainCtrl.normalServ.slipFlag).toBe(false);
        expect(MainCtrl.normalServ.equalFlag).toBe(1);
    });
    it('should show the right results for the inputs of √9', function() {
        // when 
        MainCtrl.normalServ.slip();
        MainCtrl.normalServ.delete();
        MainCtrl.symbolClick("√");
        MainCtrl.normalServ.numClick("9");
        MainCtrl.normalServ.numClick("9");
        MainCtrl.normalServ.delete();
        MainCtrl.equal();
        // then
        expect(MainCtrl.normalServ.inputs).toBe("√9=");
        expect(MainCtrl.normalServ.results).toBe(3);
        expect(MainCtrl.scienServ.powOne).toBe("");
        expect(MainCtrl.scienServ.powTwo).toBe("9");
        expect(MainCtrl.scienServ.result).toBe(null);
        expect(MainCtrl.normalServ.slipFlag).toBe(false);
        expect(MainCtrl.normalServ.equalFlag).toBe(1);
        expect(MainCtrl.normalServ.typeInFlag).toBe(0);
    });
});