define(function (require, exports) {

    'use strict';

    const ResponseStatus = {
        SUCCESS: 'success',
        ERROR: 'error'
    };
    const RESOURCE_FOR_PRODUCT_CODES = 'account-overview.json';

    function gettingProductCodesService($http, $q) {
        var instance = this;
        instance.someFunction = function() {
            var deferred = $q.defer();
            $http.get("http://localhost:8082/overdraft/getCostmerDetailsAsJSONData")
                .then(function(data) {
                    console.log("shiva");
                    console.log(data);
                    console.log(data.data.Overdraft);
                    deferred.resolve(data.data);
                });
            return deferred.promise;
        };
        return instance;
    }
    exports.gettingProductCodesService = ['$http', '$q', gettingProductCodesService];
});