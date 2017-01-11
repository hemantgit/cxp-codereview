
define(function (require, exports, module) {

    'use strict';

    const Preference = {
        PRIMARY_HEADING: 'primaryHeading',
        SECONDARY_HEADING: 'secondaryHeading',
    };
    function MainCtrl(model, lpWidget, lpCoreUtils,lpCoreBus) {
        var ctrl=this;
        ctrl.primaryHeading = lpWidget.model.getPreference(Preference.PRIMARY_HEADING);
        ctrl.secondaryHeading = lpWidget.model.getPreference(Preference.SECONDARY_HEADING);

    }
    module.exports = MainCtrl;
});
