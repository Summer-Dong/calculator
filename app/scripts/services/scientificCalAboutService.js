'use strict';
// 关于科学计算器相关的变量及方法
angular.module('calculatorApp')
	.value('scientificCalService', function() {
		var self = this;

		/*记录幂函数的两个参数*/
		self.powOne = 0;
		self.powTwo = 0;

		/*有幂计算时的结果值*/
		self.result = null;


	});