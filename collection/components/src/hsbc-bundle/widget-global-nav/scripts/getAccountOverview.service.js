define(function (require, exports) {

    'use strict';

    const ResponseStatus = {
        SUCCESS: 'success',
        ERROR: 'error'
    };
    const RESOURCE_FOR_PRODUCT_CODES = 'account-overview.json';

    function gettingProductCodesService($http, $q) {
        //console.log("in service");
        /*this.getProductCodes = function () {yo
         var deferred = $q.defer();
         $http.get("../JSON/account-overview.json").then(function (data) {
         console.log(data);
         }).catch(function (error) {
         console.log(error);
         }).finally(function () {
         });
         return deferred.promise;
         };*/

        var instance = this;

        instance.someFunction = function() {
            var deferred = $q.defer();
            //var URL = '/portalserver/static/widgets/[BBHOST]/widget-header/JSON/account-overview.json';
            $http.get("/portalserver/static/widgets/[BBHOST]/widget-header/JSON/account-overview.json")
                .then(function(data) {
                    deferred.resolve(data.data);
                });
            return deferred.promise;
        };
        return instance;
    }
    exports.gettingProductCodesService = ['$http', '$q', gettingProductCodesService];
});