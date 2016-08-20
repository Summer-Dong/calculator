'use strict';

/**
 * @ngdoc function
 * @Summer calculatorApp.controller:MainCtrl
 * @2016-8-3
 * # MainCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
	.controller('MainCtrl', function() {
		var vm = this;

		/*记录显示屏第一、二行内容，分别初始化为“空、0”*/
		vm.inputs = "";
		vm.results = "0";

		/*记录是否有等号*/
		vm.equalFlag = 0;
		/*记录当前输入是数字还是运算符*/
		vm.typeInFlag = 0;

		/*滑动按钮点击事件*/
		vm.slipFlag = true;
		vm.slip = function() {
			vm.results = "0"
			return vm.slipFlag = !vm.slipFlag;
		};

		/*clear按钮点击事件*/
		vm.clear = function() {
			vm.results = "0";
			vm.typeInFlag = 0;
		}

		/*delete按钮点击事件*/
		vm.delete = function() {
			vm.results = vm.results.substring(0, vm.results.length - 1);
		}

		/*数字按钮和“.”的点击事件*/
		vm.numClick = function(num) {
			if (vm.results == "0")
				if(num!=".")
					vm.results = "";
			/*点击数字按钮,有“=”时结果框置空*/
			if(vm.equalFlag == 1)
				vm.results = "";
			vm.results += num;
			/*当前输入状态为数字，未点击“=”*/
			vm.typeInFlag = 0;
			vm.equalFlag = 0;
		};

		/*+、-、×、÷按钮点击事件*/
		vm.symbol = function(symbol) {
			if (vm.typeInFlag == 0) {
				vm.results += symbol;
				vm.typeInFlag = 1;
			}
		};

		/*"="的点击事件*/
		/*还需对乘除符号进行转换*/
		vm.equal = function() {
			vm.equalFlag = 1;
			vm.inputs = vm.results + "=";

			vm.results = _.replace(vm.results, '×', '*')
			vm.results = _.replace(vm.results, '÷', '/')
			vm.results = eval(vm.results);
			vm.results = (_.round(vm.results))*1000000/1000000;
		}
	});