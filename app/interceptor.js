(function() {
    'use strict';

    angular
        .module('musicApp').factory('mashapeHttpInterceptor', function() {
            return {
                request: function(request) {
                    request.headers['X-Mashape-Key'] = 'HPcAFzwIZhmsh0h8RWsOkRtPYAcep19OyBNjsnjwzPKKmZ24P9'
                    request.headers["Accept"] = 'application/json'
                    request.headers["Content-Type"] = 'application/x-www-form-urlencoded'

                    return request;
                }

            };
        });
})();
