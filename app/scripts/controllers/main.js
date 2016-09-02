'use strict';

angular.module('calculatorApp')
	.controller('MainCtrl', function(normalCalService, scientificCalService) {
		var vm = this;
		vm.normalServ = normalCalService;
		vm.scienServ = scientificCalService;

		/*+、-、×、÷、^按钮点击事件*/
		vm.symbolClick = function(symbol) {
			// 点击运算符按钮,有“=”时结果框置空
			if (vm.normalServ.equalFlag == 1){
				vm.normalServ.results = "";
				vm.normalServ.equalFlag = 0;
			}
			// 只有当上次输入为数字或者没有进行输入时，显示运算符号并改变输入状态
			if (vm.normalServ.typeInFlag == 0) {
				vm.normalServ.results += symbol;
				vm.normalServ.typeInFlag = 1;
				// 方便vm.equalMock()方法的逻辑判断
				vm.normalServ.symbol = symbol;
			}
		};

		/*当有^、√计算时，vm.scienServ.result的结果值不为null，显示在结果框*/
		vm.equalMock = function() {
			var pos = vm.normalServ.results.indexOf(vm.normalServ.symbol);
			vm.scienServ.powOne = vm.normalServ.results.substring(0, pos);
			vm.scienServ.powTwo = vm.normalServ.results.substring(pos + 1, vm.normalServ.results.length + 1);
			if (vm.normalServ.results.indexOf('^') > 0)
				vm.scienServ.result = Math.pow(vm.scienServ.powOne, vm.scienServ.powTwo);
			else if (vm.normalServ.results.indexOf('√') >= 0) {
				(vm.scienServ.powOne == "") ? vm.scienServ.result = Math.pow(vm.scienServ.powTwo, 0.5) : vm.scienServ.result = Math.pow(vm.scienServ.powTwo, 1 / (vm.scienServ.powOne));
			}
		};

		/*"="的点击事件*/
		vm.equal = function() {
			vm.normalServ.equalFlag = 1;
			vm.normalServ.inputs = vm.normalServ.results + "=";
			// 替换相关运算符号
			vm.normalServ.results = _.replace(vm.normalServ.results, '×', '*');
			vm.normalServ.results = _.replace(vm.normalServ.results, '÷', '/');
			vm.normalServ.results = _.replace(vm.normalServ.results, 'π', 'Math.PI');
			vm.normalServ.results = _.replace(vm.normalServ.results, 'sin', 'Math.sin');
			vm.normalServ.results = _.replace(vm.normalServ.results, 'cos', 'Math.cos');
			vm.normalServ.results = _.replace(vm.normalServ.results, 'tan', 'Math.tan');
			if (vm.normalServ.results.indexOf("log") >= 0) {
				vm.normalServ.results = _.replace(vm.normalServ.results, 'log', 'Math.log');
				vm.normalServ.results += '/Math.log(10)';
			}
			vm.normalServ.results = _.replace(vm.normalServ.results, 'ln', 'Math.log');
			// 对是否有复杂计算进行判断，若有，显示相应结果并将结果置空
			vm.equalMock();
			(vm.scienServ.result == null) ? vm.normalServ.results = eval(vm.normalServ.results) : vm.normalServ.results = vm.scienServ.result;
			// 当有^、√计算时，还原vm.scienServ.result的初始值，否则后续判断会出错
			vm.scienServ.result = null;
			 
			vm.normalServ.results = Math.round(vm.normalServ.results*1000000)/1000000;
		};

	});