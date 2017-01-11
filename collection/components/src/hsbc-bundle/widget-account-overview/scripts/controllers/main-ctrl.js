/**
 * Controllers
 * @module controllers
 */
define(function (require, exports, module) {

    'use strict';
    const DATA_EXCHANGE_EVENT = 'dataExchange';
    const BASE_PORTAL_SERVER_URL = 'http://localhost:7777/portalserver';
    const PORTAL_NAME = '/accountoverview-demo';
    const NEXT_PAGE='/limit-overview';

    const Preference = {
        PRIMARY_BUSINESS_HEADING: 'primaryBusinessHeading',
        SECONDARY_BUSINESS_HEADING: 'secondaryBusinessHeading',
        AVAILABLE_BALANCE: 'availableBalance',
        SMART_OVERDRAFT_LIMIT: 'smartOverdraftLimit'
    };

    function MainCtrl(model, lpWidget, lpCoreUtils, $http,lpCoreBus,$window) {
        var ctrl = this;
        ctrl.primaryBusinessHeading = lpWidget.getPreference(Preference.PRIMARY_BUSINESS_HEADING);
        ctrl.secondaryBusinessHeading = lpWidget.getPreference(Preference.SECONDARY_BUSINESS_HEADING);
        ctrl.availableBalance = lpWidget.getPreference(Preference.AVAILABLE_BALANCE);
        ctrl.smartOverdraftLimit = lpWidget.getPreference(Preference.SMART_OVERDRAFT_LIMIT);

        function getCustomerId(cusomerDetails) {
            return cusomerDetails && cusomerDetails.Customer ? cusomerDetails.Customer.CustomerId : '';
        }
        model.getCutomerDetails().then(function(cusomerDetails){
            ctrl.CustomerId = getCustomerId(cusomerDetails);
            var businessAccounts = [];
            if (cusomerDetails && cusomerDetails.Customer && cusomerDetails.Customer.BusinessAccounts && cusomerDetails.Customer.BusinessAccounts.BusinessAccount) {
                businessAccounts = cusomerDetails.Customer.BusinessAccounts.BusinessAccount;
                businessAccounts.forEach(function (businessAccount) {
                    if (businessAccount.IsPrimary) {
                        ctrl.primaryAccount = businessAccount;
                        ctrl.accountNumber= ctrl.primaryAccount.AccountNumber;
                        ctrl.availableBal=parseInt(ctrl.primaryAccount.AvailableBalance)+100;
                    } else {
                        ctrl.secondaryAccount = businessAccount;
                    }
                });
            }
        });

        ctrl.NavigateNextpage = function () {
           model.sendingCustomerDetails(ctrl.CustomerId,ctrl.accountNumber,ctrl.availableBal)
                .success(function (data, status) {
                    $window.location.href = BASE_PORTAL_SERVER_URL+PORTAL_NAME+NEXT_PAGE;
                })
                .error(function (data) {
                    alert("We Can't find the page");
                });
        };
    }

    module.exports = ['model', 'lpWidget', 'lpCoreUtils', '$http','lpCoreBus','$window', MainCtrl];
});