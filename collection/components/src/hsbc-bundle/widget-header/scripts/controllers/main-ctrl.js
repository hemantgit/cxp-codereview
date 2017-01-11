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
    function MainCtrl(model, lpWidget, lpCoreUtils) {
        this.state = model.getState();
        this.utils = lpCoreUtils;
        this.widget = lpWidget;
    }



    module.exports = ['model', 'lpWidget', 'lpCoreUtils', MainCtrl];
});