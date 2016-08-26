'use strict';

/**
 * @ngdoc function
 * @Summer calculatorApp.controller:MainCtrl
 * @2016-7-19
 * # normalCalcu
 * directive of the calculatorApp
 */
angular.module('calculatorApp')
    .directive( 'scientificCalcu', function () {
        return {
            restrict: 'EA',
            templateUrl: '../../views/calcu/scientific.html',
            replace: true
        };
    });