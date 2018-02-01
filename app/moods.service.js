(function() {
    'use strict';

    angular
        .module('musicApp')
        .factory('MoodFactory', MoodFactory);

    MoodFactory.$inject = ['$http', '$q', 'toastr'];

    /* @ngInject */
    function MoodFactory($http, $q, toastr) {
        var service = {
            grabMoods: grabMoods
        };

        return service;

        function grabMoods() {
            var defer = $q.defer();
            $http({
                    method: 'GET',
                    url: 'app/moods.json'
                })
                .then(
                    function(response) {
                        defer.resolve(response);
                        // toastr.success('we have moods!');
                    },
                    function(error) {
                        defer.reject(error.data);
                    }
                );

            return defer.promise;
        }
    }
})();
