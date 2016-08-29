angular.module('calculatorApp')
    .service('scientificCalService', function() {
        var self = this;


		/*记录幂函数的两个参数*/
		self.powOne = 0;
		self.powTwo = 0;
		
		/*有幂计算时的结果值*/
		self.result = null;
    });
