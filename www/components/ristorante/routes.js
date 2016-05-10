
angular.module('ristorante.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app.configTables', {
                url: '/configTables',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ristorante/views/configTables.html',
                        controller: 'configTableController'
                    }
                }
            })
            .state('app.configWaiters', {
                url: '/configWaiters',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ristorante/views/configWaiters.html'
                    }
                }
            })
            .state('app.waiter', {
                url: '/waiter',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ristorante/views/waiter.html'
                    }
                }
            })
            .state('app.comanda', {
                url: '/comanda',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ristorante/views/comanda.html'
                    }
                }
            })

            .state('app.disponibilita', {
                url: '/disponibilita',
                views: {
                    'menuContent': {
                        templateUrl: 'components/ristorante/views/disponibilita.html'
                    }
                }
            })
    }
)
