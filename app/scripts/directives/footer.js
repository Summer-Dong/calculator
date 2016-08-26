'use strict';

/**
 * @ngdoc function
 * @Summer calculatorApp.controller:MainCtrl
 * @2016-7-19
 * # footer
 * directive of the calculatorApp
 */
angular.module('calculatorApp')
    .directive( 'footer', function () {
        return {
            restrict: 'EA',
            templateUrl: '../../views/nav/footer.html',
            replace: true
        };
    });