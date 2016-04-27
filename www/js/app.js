// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
  .state('app.codStore', {
    url: '/codStore',
    views: {
      'menuContent': {
        templateUrl: 'templates/codStore.html'
      }
    }
  })
  .state('app.myStore', {
    url: '/myStore',
    views: {
      'menuContent': {
        templateUrl: 'templates/myStore.html'
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
  .state('app.configTables', {
    url: '/configTables',
    views: {
      'menuContent': {
        templateUrl: 'templates/configTables.html',
        controller:'configTableController'
      }
    }
  })
  .state('app.configWaiters', {
    url: '/configWaiters',
    views: {
      'menuContent': {
        templateUrl: 'templates/configWaiters.html'
      }
    }
  })
  .state('app.waiter', {
    url: '/waiter',
    views: {
      'menuContent': {
        templateUrl: 'templates/waiter.html'
      }
    }
  })
  .state('app.comanda', {
    url: '/comanda',
    views: {
      'menuContent': {
        templateUrl: 'templates/comanda.html'
      }
    }
  })
  .state('app.fattura', {
    url: '/fattura',
    views: {
      'menuContent': {
        templateUrl: 'templates/fattura.html',
        controller:'fatturaController'
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
  .state('app.ricetta', {
    url: '/ricetta/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/ricetta.html',
        controller:'ricettaController'
      }
    }
  })
  .state('app.elencoRicette', {
    url: '/elencoRicette',
    views: {
      'menuContent': {
        templateUrl: 'templates/elencoRicette.html',
        controller:'goodController'
      }
    }
  })
  .state('app.ftemessa', {
    url: '/ftemessa',
    views: {
      'menuContent': {
        templateUrl: 'templates/ftemessa.html',
        controller:'fatturaController'
      }
    }
  })
  .state('app.disponibilita', {
    url: '/disponibilita',
    views: {
      'menuContent': {
        templateUrl: 'templates/disponibilita.html'
      }
    }
  })
  .state('app.vini', {
    url: '/vini',
    views: {
      'menuContent': {
        templateUrl: 'templates/vini.html',
        controller:'viniController'
      }
    }
  })
  .state('app.vino', {
    url: '/vino',
    views: {
      'menuContent': {
        templateUrl: 'templates/vino.html',
        controller:'vinoController'
      }
    }
  })
  .state('app.schedaOrganolettica', {
    url: '/schedaOrganolettica',
    views: {
      'menuContent': {
        templateUrl: 'templates/schedaOrganolettica.html',
        controller:'vinoController'
      }
    }
  })
  .state('app.ingredienti', {
    url: '/ingredienti/:gruppo',
    views: {
      'menuContent': {
        templateUrl: 'templates/ingredienti.html',
        controller:'ingredientiController'
      }
    }
  })
  .state('app.ingrediente', {
    url: '/ingrediente',
    views: {
      'menuContent': {
        templateUrl: 'templates/ingrediente.html',
        controller:'ingredienteController'
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
  .state('app.frigo', {
    url: '/frigo',
    views: {
      'menuContent': {
        templateUrl: 'templates/frigo.html',
        controller:'groupsController'
      }
    }
  })
  .state('app.luogo', {
    url: '/luogo',
    views: {
      'menuContent': {
        templateUrl: 'templates/luogo.html',
        controller:'luogoController'
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
