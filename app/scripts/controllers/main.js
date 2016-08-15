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

		/*数字按钮点击事件*/
		vm.numClick = function(num) {
			if (vm.results == "0")
				vm.results = "";
			vm.results += num;
			vm.typeInFlag = 0;
		};

		/*+、-、×、÷按钮点击事件*/
		vm.symbol = function(symbol) {
			if(vm.typeInFlag == 0){
				vm.results += symbol;
				vm.typeInFlag = 1;
			}
		}
	}).controller('ScientificCtrl', function() {
		var vs = this;
		vs.bracket=function(brackets){
			vs.emit(vm.results+=brackets);
		}
	});