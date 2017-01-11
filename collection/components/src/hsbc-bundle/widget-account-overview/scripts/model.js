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

        model.getCutomerDetails = function () {
            var deferred = $q.defer();
            $http.get(BASE_SERVICE_URL + '/getCostmerDetailsAsJSONData')
                .then(function (customerDetails) {
                    console.log("inside the main page ");
                    deferred.resolve(customerDetails.data);
                    console.log(customerDetails.data);
                });
            return deferred.promise;
        };
        model.sendingCustomerDetails = function (customerId,accountNumber, availableBalance) {
            var postData = {
                "customerId": customerId,
                "accountNumber": accountNumber,
                "availableBalance": availableBalance
            };
            console.log(postData);
            return $http({
                method: 'POST',
                url: "http://localhost:8082/overdraft/updateCostmersDetails",
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
