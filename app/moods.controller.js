(function() {
    'use strict';

    angular
        .module('musicApp')
        .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodFactory', 'toastr'];

    /* @ngInject */
    function MoodController(MoodFactory, toastr) {
        var vm = this;


        vm.getMoods = function() {
            MoodFactory.grabMoods()
                .then(
                    function(response) {
                        vm.moods = response.data;
                    },
                    function(error) {
                        toastr.warning('no moods found');
                    }
                );
        }

        vm.getMoods();
    }
})();
