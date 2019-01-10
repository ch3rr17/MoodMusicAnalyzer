(function() {
    'use strict';

    angular
        .module('musicApp')
        .factory('MoodAnalyzerFactory', MoodAnalyzerFactory);

    MoodAnalyzerFactory.$inject = ['$http', '$q', 'toastr', '$stateParams'];

    /* @ngInject */
    function MoodAnalyzerFactory($http, $q, toastr, $stateParams) {
        var service = {
            // grabSentimentForMood: grabSentimentForMood,
            getMusicForMood: getMusicForMood,
            getImagesForMood: getImagesForMood
        };

        return service;

        //SENTIMENT API CALL
        // function grabSentimentForMood() {
        //     var defer = $q.defer();

        //     $http({
        //             method: 'GET',
        //             url: 'https://sentity-v1.p.mashape.com/v1/sentiment?text=' + $stateParams.mood, //Sentity text analytics - https://sentity.io
        //         })
        //         .then(
        //             function(response) {
        //                 defer.resolve(response);
        //                 // toastr.success("We have sentiments");
        //             },
        //             function(error) {
        //                 defer.reject(error.data)
        //                 // toastr.error("no sentiments found");
        //             }
        //         );

        //     return defer.promise;

        // }

        //SPOTIFY API CALL
        function getMusicForMood() {
            var defer = $q.defer();
            $http({
                    method: 'GET',
                    url: '/music-for-mood/' + $stateParams.mood
                })
                .then(
                    function(response) {
                        defer.resolve(response);
                        // toastr.success("We have music for mood!");
                    },
                    function(error) {
                        defer.reject(error.data);
                        // toastr.error("No music found");
                    }
                );

            return defer.promise;
        }

        //GETTY IMAGES API CALL
        function getImagesForMood() {
            var defer = $q.defer();
            $http({
                    method: 'GET',
                    url: '/images-for-mood/' + $stateParams.mood
                })
                .then(
                    function(data) {
                        defer.resolve(data);
                        console.log('RESPONSE', data);

                        // toastr.success("We have images for mood");
                    },
                    function(error) {
                        defer.reject(error.data);
                        // toastr.error("No images found");
                    }
                );

            return defer.promise;

        }
    }
})();
