
define(function (require, exports) {
    'use strict';

    // @ngInject
    exports.roundSlider = function () {
        return {
            restrict: 'AE',
            require: 'ngModel',
            scope: {
                name: '=',
                value: '=',
                radius: '<',
                ngModel: '=',
                min: '<',
                max: '<'
            },
            link: function (scope, elem, attrs) {
                elem.roundSlider({
                    radius: scope.radius || 150,
                    circleShape: "half-top",
                    startAngle:317,
                    endAngle:"+90",
                    sliderType: "min-range",
                    min: scope.min,
                    max: scope.max,
                    midMax: 90000,
                    currencySymbol: '&pound;',
                    width: 40,
                    animation: false,
                    editableTooltip: true,
                    roundOff:100,
                    value: scope.ngModel || 0

                });

                function udpateModel(){
                    scope.$apply(function () {
                        scope.ngModel = elem.data("roundSlider").getValue();
                    });
                }
                elem.bind('change', function () {
                    udpateModel();
                });
                elem.bind('drag', function () {
                    udpateModel();
                });
            }
        };
    };
});
