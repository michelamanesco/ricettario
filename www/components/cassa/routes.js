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
    });