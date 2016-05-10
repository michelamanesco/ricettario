angular.module('ricette.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app.ricetta', {
                url: '/ricetta/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ricette/views/ricetta.html',
                        controller: 'ricettaController'
                    }
                }
            })
            .state('app.elencoRicette', {
                url: '/elencoRicette',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ricette/views/elencoRicette.html',
                        controller: 'goodController'
                    }
                }
            })
            .state('app.ingredienti', {
                url: '/ingredienti/:gruppo',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ricette/views/ingredienti.html',
                        controller:'ingredientiController'
                    }
                }
            })
            .state('app.ingrediente', {
                url: '/ingrediente',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ricette/views/ingrediente.html',
                        controller:'ingredienteController'
                    }
                }
            })
            .state('app.frigo', {
                url: '/frigo',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ricette/views/frigo.html',
                        controller:'groupsController'
                    }
                }
            })
    })

