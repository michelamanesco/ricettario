

angular.module('luoghi.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app.luogo', {
                url: '/luogo',
                views: {
                    'menuContent': {
                        templateUrl: 'components/luoghi/views/luogo.html',
                        controller: 'luogoController'
                    }
                }
            })
    })
