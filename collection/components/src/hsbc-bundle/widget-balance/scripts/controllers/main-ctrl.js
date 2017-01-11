/**
 * Controllers
 * @module controllers
 */
define(function (require, exports, module) {

    'use strict';

    const Preference = {
        BALANCE: 'balance',
        ACCOUNT_NUMBER: 'accountNumber',
    };

    function MainCtrl(model, lpWidget, lpCoreUtils, lpCoreBus, $scope) {
        var ctrl = this;
        ctrl.balance = lpWidget.model.getPreference(Preference.BALANCE);
        ctrl.accountNumber = lpWidget.model.getPreference(Preference.ACCOUNT_NUMBER);

        lpCoreBus.subscribe("dataExchange", function (data) {
            ctrl.accNumber = data.AccountNumber;
            ctrl.availableBalance = data.AvailableBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $scope.$applyAsync();
        });
    }


    module.exports = MainCtrl;
});
