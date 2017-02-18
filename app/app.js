(function() {
    'use strict';

    angular
        .module('musicApp', [
            'toastr',
            'ui.router'
        ])

        .config(function($urlRouterProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'app/partials/moods.html',
                controller: 'MoodController as vm'
            })
        })
})();
