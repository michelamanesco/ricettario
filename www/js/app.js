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

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
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
  .state('app.ricettario', {
    url: '/ricettario',
    views: {
      'menuContent': {
        templateUrl: 'templates/ricettario.html',
        controller:'ricettarioController'
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
        controller:'goodController'
      }
    }
  })



  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});




// PROVA MIKI  //

//angular.module('mainModuleName', ['ionic', 'ionic-ratings']){
  //
//}
//











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
