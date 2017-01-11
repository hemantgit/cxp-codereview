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
            icon: utils.resolvePortalPlaceholders(lpWidget.getPreference('thumbnailUrl')),
            getCustomerDeatilsUrl:lpWidget.getPreference('getCustomerDeatilsUrl'),
            updateCustomerDetailsUrl:lpWidget.getPreference('updateCustomerDetailsUrl'),
        };
        var model = {};
        model.getState = function getState() {
            return state;
        };

        model.getCutomerDetails = function () {
            var deferred = $q.defer();
            $http.get(state.getCustomerDeatilsUrl)
                .then(function (customerDetails) {
                    deferred.resolve(customerDetails.data);
                });
            return deferred.promise;
        };
        model.sendingCustomerDetails = function (customerId,accountNumber, availableBalance) {
            var postData = {
                "customerId": customerId,
                "accountNumber": accountNumber,
                "availableBalance": availableBalance
            };

            return $http({
                method: 'POST',
                url:  state.updateCustomerDetailsUrl,
                data: postData,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        }
        return model;
    }

    module.exports = ['lpWidget', 'lpCoreUtils', 'lpCoreBus', '$q', '$http', WidgetModel];
});
