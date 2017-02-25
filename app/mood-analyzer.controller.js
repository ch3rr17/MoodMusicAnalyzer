(function() {
    'use strict';

    angular
        .module('musicApp')
        .controller('MoodAnalyzerController', MoodAnalyzerController);

    MoodAnalyzerController.$inject = ['MoodAnalyzerFactory', 'toastr', 'mashapeHttpInterceptor', '$stateParams', '$sce'];

    /* @ngInject */
    function MoodAnalyzerController(MoodAnalyzerFactory, toastr, mashapeHttpInterceptor, $stateParams, $sce) {
        var vm = this;

        vm.mood = $stateParams.mood;

        //SENTIMENT
        vm.getSentiment = function() {
            MoodAnalyzerFactory.grabSentimentForMood()
                .then(
                    function(response) {
                        vm.sentiments = response.data;
                    },
                    function(error) {
                        toastr.error('no sentiments');
                    }
                );
        }

        vm.getSentiment();


        //MUSIC
        vm.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        vm.getMusic = function() {
            MoodAnalyzerFactory.getMusicForMood()
                .then(
                    function(response) {
                        vm.album = response.data.albums.items[0];
                        vm.albumEmbedPlayer = "https://embed.spotify.com/?uri=spotify%3Aalbum%3A" + vm.album.id;
                    },
                    function(error) {
                        toastr.error('no album found');
                    }
                );
        }

        vm.getMusic();

        //IMAGES
        vm.getImages = function() {
            MoodAnalyzerFactory.getImagesForMood()
                .then(
                    function(response) {
                        vm.moodImages = response.data.images;
                    },
                    function(error) {
                        toastr.error('no images found for that mood');
                    }
                );
        }

        vm.getImages();

    }
})();
