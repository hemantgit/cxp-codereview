define(function (require, exports, module) {

    'use strict';

    function MainCtrl(model, lpWidget, lpCoreUtils) {
        this.state = model.getState();
        this.utils = lpCoreUtils;
        this.widget = lpWidget;
    }


    module.exports = MainCtrl;
});
