/**
 * Controllers
 * @module controllers
 */
define(function (require, exports, module) {
    'use strict';
    const DATA_EXCHANGE_EVENT = 'dataExchange';
    /**
     * Main controller
     * @ngInject
     * @constructor
     */
    const Preference = {
        LIMIT_OVERVIEW_HEADING: 'limitOverviewHeading',
        LIMIT_OVERVIEW_LABEL: 'limitOverviewLabel',
    };
    function MainCtrl(model, lpWidget, lpCoreUtils,lpCoreBus,$scope,gettingProductCodesService) {
        var ctrl=this;
        ctrl.limitOverviewHeading = lpWidget.model.getPreference(Preference.LIMIT_OVERVIEW_HEADING);
        ctrl.limitOverviewLabel = lpWidget.model.getPreference(Preference.LIMIT_OVERVIEW_LABEL);

        this.openOverlay = function () {
            $('.lp-aligner').addClass('lp-lightbox-on');
        };
        gettingProductCodesService.getOveriewLimit().then(function (data) {
            ctrl.CustomerId=data.Customer.CustomerId;
            var businessAccounts = [];
            if (data && data.Customer && data.Customer.BusinessAccounts && data.Customer.BusinessAccounts.BusinessAccount) {
                businessAccounts = data.Customer.BusinessAccounts.BusinessAccount;
                businessAccounts.forEach(function (businessAccount) {
                    if (businessAccount.IsPrimary) {
                        ctrl.primaryAccount = businessAccount;
                        console.log(ctrl.primaryAccount.AccountNumber)
                        ctrl.OverDraftLimit=ctrl.primaryAccount.OverdraftLimitEnd;


                    }
                });
            }
            lpCoreBus.publish(DATA_EXCHANGE_EVENT, ctrl.primaryAccount);
            console.log("publish data");
            console.log(data);
        });

    }



    module.exports = ['model', 'lpWidget', 'lpCoreUtils','lpCoreBus','$scope', 'gettingProductCodesService',MainCtrl];
});
