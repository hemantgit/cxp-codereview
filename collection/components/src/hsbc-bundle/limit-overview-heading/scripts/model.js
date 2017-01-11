/**
 * Models
 * @module models
 */
define(function (require, exports, module) {

    'use strict';

    function WidgetModel(lpWidget, lpCoreUtils, lpCoreBus, $q, $http) {
        const BASE_SERVICE_URL = 'http://localhost:8082/overdraft';
        var utils = lpCoreUtils;

        var state = {
            title: lpWidget.getPreference('title'),
            icon: utils.resolvePortalPlaceholders(lpWidget.getPreference('thumbnailUrl'))
        };

        var model = {};
        model.getState = function getState() {
            return state;
        };

        model.getOverDraftDetails = function () {
            var deferred = $q.defer();
            $http.get(BASE_SERVICE_URL + '/getCostmerDetailsAsJSONData')
                .then(function (customerDetails) {
                    deferred.resolve(customerDetails.data);
                });
            return deferred.promise;
        };

        return model;
    }

    module.exports = ['lpWidget', 'lpCoreUtils', 'lpCoreBus', '$q', '$http', WidgetModel];
});
