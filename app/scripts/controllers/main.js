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
		// 滑动按钮点击事件
		vm.slipFlag = true;
		vm.results = "0";
		vm.slip = function() {
			return vm.slipFlag = !vm.slipFlag;
		};
		// 数字按钮点击事件
		vm.numClick = function(num) {
			vm.results += num;
		};
	});