angular.module('museo.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app.autore', {
                url: '/autore',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/author.html',
                        controller: 'autoreController'
                    }
                }
            })
            .state('app.range', {
                url: '/range',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/range.html',
                        controller: 'mappaController'
                    }
                }
            })
            .state('app.toast', {
                url: '/toast',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/toast.html'
                    }
                }
            })
            .state('app.itinerari', {
                url: '/itinerari',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/itinerari.html',
                        controller: 'itinerariController'
                    }
                }
            })
            .state('app.itinerario', {
                url: '/itinerario/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/itinerario.html',
                        controller: 'itinerarioController'
                    }
                }
            })
            .state('app.capitolo', {
                url: '/capitolo',
                views: {
                    'menuContent': {
                        templateUrl: 'components/museo/views/chapter.html',
                        controller: 'chapterController'
                    }
                }
            })
    })
