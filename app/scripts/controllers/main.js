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
		//功能键点击事件
		
		//"="按键的点击事件，当result框非0时，result内容移到typeIn框；当result框为0时，不做改变
		vm.equalClick=function(){

		}
	});