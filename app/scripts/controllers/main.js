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

		/*滑动按钮点击事件*/
		vm.slipFlag = true;
		vm.slip = function() {
			return vm.slipFlag = !vm.slipFlag;
		};

		/*数字按钮点击事件*/
		vm.numClick = function(num) {
			if (vm.results == "0")
				vm.results = "";
			vm.results += num;
		};
	});