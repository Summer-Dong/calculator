'use strict';

angular.module('calculatorApp')
    .directive('whenActive', function($location) {
        return {
            scope: true,
            link: function(scope, element, attrs) {
                scope.$on('$routeChangeSuccess', function() {
                    if ($location.path() == element.attr('href').substring(1)) {
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                });
            }
        };
    });