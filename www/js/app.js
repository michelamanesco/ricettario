// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'ricette.routes',
  'ristorante.routes',
  'vini.routes',
  'cassa.routes',
  'museo.routes',
  'luoghi.routes'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('app.slide', {
    url: '/slide',
    views: {
      'menuContent': {
        templateUrl: 'templates/slide.html'
      }
    }
  })







  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/elencoRicette');
});



// prova Miki//
angular.module('mySuperApp', ['ionic'])
  .controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

    // An alert dialog
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Conferma',
        template: 'Stampa scontrino / fattura'
      });

      alertPopup.then(function(res) {
        console.log('Thank you');
      });
    };
  });
