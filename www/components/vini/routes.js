
angular.module('vini.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app.vini', {
                url: '/vini',
                views: {
                    'menuContent': {
                        templateUrl: 'components/vini/views/vini.html',
                        controller: 'viniController'
                    }
                }
            })
            .state('app.vino', {
                url: '/vino/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'components/vini/views/vino.html',
                        controller: 'vinoController'
                    }
                }
            })
            .state('app.schedaOrganolettica', {
                url: '/schedaOrganolettica',
                views: {
                    'menuContent': {
                        templateUrl: 'components/vini/views/schedaOrganolettica.html',
                        controller: 'vinoController'
                    }
                }
            })
    })