/**
 * Created by Miky on 27/04/16.
 */
angular.module('cassa.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app.cassa', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
    })



.state('app.myStore', {
    url: '/myStore',
    views: {
        'menuContent': {
            templateUrl: 'view/html/myStore.html'
        }
    }
})
.state('app.configCash', {
    url: '/configCash',
    views: {
        'menuContent': {
            templateUrl: 'templates/configCash.html'
        }
    }
})
.state('app.codStore', {
    url: '/codStore',
    views: {
        'menuContent': {
            templateUrl: 'templates/codStore.html'
        }
    }
})
.state('app.catalogo', {
    url: '/catalogo',
    views: {
        'menuContent': {
            templateUrl: 'templates/catalogo.html',
            controller:'goodController'
        }
    }
})
.state('app.carrello', {
    url: '/carrello',
    views: {
        'menuContent': {
            templateUrl: 'templates/carrello.html',
            controller:'goodController'
        }
    }
})