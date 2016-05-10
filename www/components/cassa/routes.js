
angular.module('cassa.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app.cassa', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })


            .state('app.myStore', {
                url: '/myStore',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/myStore.html'
                    }
                }
            })
            .state('app.configCash', {
                url: '/configCash',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/configCash.html'
                    }
                }
            })
            .state('app.codStore', {
                url: '/codStore',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/codStore.html'
                    }
                }
            })
            .state('app.catalogo', {
                url: '/catalogo',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/catalogo.html',
                        controller: 'goodController'
                    }
                }
            })
            .state('app.carrello', {
                url: '/carrello',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/carrello.html',
                        controller: 'goodController'
                    }
                }
            })
            .state('app.ftemessa', {
                url: '/ftemessa',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/ftemessa.html',
                        controller:'fatturaController'
                    }
                }
            })
            .state('app.fattura', {
                url: '/fattura',
                views: {
                    'menuContent': {
                        templateUrl: 'components/cassa/views/fattura.html',
                        controller:'fatturaController'
                    }
                }
            })



    })