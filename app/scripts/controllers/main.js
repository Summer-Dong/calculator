'use strict';

/**
 * @ngdoc function
 * @Summer calculatorApp.controller:MainCtrl
 * @2016-8-3
 * # MainCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
	.controller('MainCtrl', function(normalCalService, scientificCalService) {
		var vm = this;

		vm.normalServ = normalCalService;
		vm.scienServ = scientificCalService;

		/*数字按钮和“.”的点击事件*/
		vm.numClick = function(num) {
			if (vm.normalServ.results == "0")
				if (num != ".")
					vm.normalServ.results = "";
			// 点击数字按钮,有“=”时结果框置空
			if (vm.normalServ.equalFlag == 1)
				vm.normalServ.results = "";
			vm.normalServ.results += num;
			// 当前输入状态为数字，未点击“=”
			vm.normalServ.typeInFlag = 0;
			vm.normalServ.equalFlag = 0;
		};

		/*+、-、×、÷、^按钮点击事件*/
		vm.symbolClick = function(symbol) {
			if (vm.normalServ.typeInFlag == 0) {
				vm.normalServ.results += symbol;
				vm.normalServ.typeInFlag = 1;
				vm.normalServ.symbol = symbol;
				console.log(vm.normalServ.symbol)
			}
		};

		/*"="的模拟点击事件，当计算结果时触发，当有复杂计算时，vm.scienServ.result的结果值不为null*/
		vm.equalMock = function() {
			var pos = vm.normalServ.results.indexOf(vm.normalServ.symbol);
			vm.scienServ.powOne = vm.normalServ.results.substring(0, pos);
			vm.scienServ.powTwo = vm.normalServ.results.substring(pos + 1, vm.normalServ.results.length + 1);
			if (vm.normalServ.results.indexOf('^') > 0)
				vm.scienServ.result = Math.pow(vm.scienServ.powOne, vm.scienServ.powTwo);
			else if (vm.normalServ.results.indexOf('√') > 0){
				vm.scienServ.powOne == null ? vm.scienServ.result = Math.pow(vm.scienServ.powTwo, 0.5) : vm.scienServ.result = Math.pow(vm.scienServ.powTwo, 1/(vm.scienServ.powOne));
			}
		};

		/*"="的点击事件*/
		vm.equal = function() {
			vm.normalServ.equalFlag = 1;
			vm.normalServ.inputs = vm.normalServ.results + "=";

			vm.normalServ.results = _.replace(vm.normalServ.results, '×', '*');
			vm.normalServ.results = _.replace(vm.normalServ.results, '÷', '/');
			vm.equalMock();
			vm.scienServ.result == null ? vm.normalServ.results = eval(vm.normalServ.results) : vm.normalServ.results = vm.scienServ.result;
		};

	});
	