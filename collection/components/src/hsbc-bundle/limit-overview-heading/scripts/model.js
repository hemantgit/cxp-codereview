/**
 * Models
 * @module models
 */
define(function (require, exports, module) {

    'use strict';

    function WidgetModel(lpWidget, lpCoreUtils, lpCoreBus, $q, $http) {
        var utils = lpCoreUtils;

        var state = {
            title: lpWidget.getPreference('title'),
            icon: utils.resolvePortalPlaceholders(lpWidget.getPreference('thumbnailUrl')),
            getOverdraftUrl:lpWidget.getPreference('getOverdraftUrl'),
        };

        var model = {};
        model.getState = function getState() {
            return state;
        };

        model.getOverDraftDetails = function () {
            var deferred = $q.defer();
            $http.get(state.getOverdraftUrl)
                .then(function (customerDetails) {
                    deferred.resolve(customerDetails.data);
                });
            return deferred.promise;
        };

        return model;
    }

    module.exports = ['lpWidget', 'lpCoreUtils', 'lpCoreBus', '$q', '$http', WidgetModel];
});
