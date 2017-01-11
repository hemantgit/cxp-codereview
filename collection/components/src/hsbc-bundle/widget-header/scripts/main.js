/**
 *  ----------------------------------------------------------------
 *  Copyright © Backbase B.V.
 *  ----------------------------------------------------------------
 *  Filename : main.js
 *  Description: Header account overview
 *  ----------------------------------------------------------------
 */

define( function (require, exports, module) {

    'use strict';

    module.name = 'widget-header';

    // External Dependencies
    var base = require('base');
    var core = require('core');
    var ui = require('ui');

    // Internal Dependencies
    var Model = require('./model');
    var MainCtrl = require('./controllers/main-ctrl');
    //var gettingProductCodesService=require('./getAccountOverview.service');

    var deps = [
        core.name,
        ui.name
    ];

    /**
     * @ngInject
     */
    function run() {
        // Module is Bootstrapped
    }

    module.exports = base.createModule(module.name, deps)
        .constant('WIDGET_NAME', module.name )
        .controller('MainCtrl', MainCtrl )
        .factory( 'model', Model )
        .run( run );
});

