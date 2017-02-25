(function() {
    'use strict';

    angular
        .module('musicApp', [
            'toastr',
            'ui.router'
        ])

        .config(function($urlRouterProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/main');

            $stateProvider.state('mood', {
                    url: '/main',
                    templateUrl: 'app/partials/moods.html',
                    controller: 'MoodController as vm'
                })
                .state('sentiment', {
                    url: '/sentiment/{mood}',
                    templateUrl: 'app/partials/mood-analyzer.html',
                    controller: 'MoodAnalyzerController as vm'
                })

            $httpProvider.interceptors.push('mashapeHttpInterceptor');
        })
})();
