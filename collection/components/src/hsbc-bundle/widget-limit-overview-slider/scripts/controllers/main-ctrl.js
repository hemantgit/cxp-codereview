/**
 * Controllers
 * @module controllers
 */
define(function (require, exports, module) {

    'use strict';

    /**
     * Main controller
     * @ngInject
     * @constructor
     */
    function MainCtrl(model, lpWidget, lpCoreUtils, lpCoreBus, $scope) {
        var ctrl = this;
        ctrl.loadModal = false;
        lpCoreBus.subscribe("dataExchange", function (data) {
            ctrl.display = true;
            ctrl.OverdraftAmount = data.OverdraftAmount;
            ctrl.monthyFee = data.OverdraftDue.MonthlyFee;
            ctrl.interest = data.OverdraftDue.Interest;
            ctrl.loadModal = true;
            $scope.$applyAsync();
        });
    }

    MainCtrl.prototype.$onInit = function () {

    };
    module.exports = MainCtrl;
});
