'use strict';

/**
 * @ngdoc function
 * @Summer calculatorApp.controller:MainCtrl
 * @2016-7-19
 * # header
 * directive of the calculatorApp
 */
angular.module('calculatorApp')
    .directive( 'header', function () {
        return {
            restrict: 'EA',
            templateUrl: '../../views/nav/header.html',
            replace: true
        };
    });