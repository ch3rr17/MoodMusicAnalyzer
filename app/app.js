(function() {
    'use strict';

    angular
        .module('musicApp', [
            'toastr',
            'ui.router'
        ])

        .config(function($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('mood', {
                    url: '/',
                    templateUrl: 'partials/moods.html',
                    controller: 'MoodController as vm'
                })
                .state('sentiment', {
                    url: '/sentiment/{mood}',
                    templateUrl: 'partials/mood-analyzer.html',
                    controller: 'MoodAnalyzerController as vm'
                })

            // $httpProvider.interceptors.push('mashapeHttpInterceptor');
        })
})();
