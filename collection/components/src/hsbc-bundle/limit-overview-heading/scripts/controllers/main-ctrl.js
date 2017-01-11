
define(function (require, exports, module) {
    'use strict';
    const DATA_EXCHANGE_EVENT = 'dataExchange';
    const Preference = {
        LIMIT_OVERVIEW_HEADING: 'limitOverviewHeading',
        LIMIT_OVERVIEW_LABEL: 'limitOverviewLabel',
    };
    function MainCtrl(model, lpWidget, lpCoreUtils,lpCoreBus,$scope) {
        var ctrl=this;
        ctrl.limitOverviewHeading = lpWidget.model.getPreference(Preference.LIMIT_OVERVIEW_HEADING);
        ctrl.limitOverviewLabel = lpWidget.model.getPreference(Preference.LIMIT_OVERVIEW_LABEL);

        this.openOverlay = function () {
            $('.lp-aligner').addClass('lp-lightbox-on');
        };
        model.getOverDraftDetails().then(function(overdraftDetails){
            var businessAccounts = [];
            if (overdraftDetails && overdraftDetails.Customer && overdraftDetails.Customer.BusinessAccounts && overdraftDetails.Customer.BusinessAccounts.BusinessAccount) {
                businessAccounts = overdraftDetails.Customer.BusinessAccounts.BusinessAccount;
                businessAccounts.forEach(function (businessAccount) {
                    if (businessAccount.IsPrimary) {
                        ctrl.primaryAccount = businessAccount;
                        ctrl.OverDraftLimit=ctrl.primaryAccount.OverdraftAmount;
                    }
                });
            }
            lpCoreBus.publish(DATA_EXCHANGE_EVENT, ctrl.primaryAccount);

        });


    }



    module.exports = ['model', 'lpWidget', 'lpCoreUtils','lpCoreBus','$scope',MainCtrl];
});
