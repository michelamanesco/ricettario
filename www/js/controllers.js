angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.dataOra=new Date();
    $scope.user={
      name:"Luigi",
      surname:"Rossi"
    };
    $scope.company={
      name:"Pizzeria Mario",
      via:"san Giovanni",
      numero:"1",
      zip:"200080",
      country:"Basiglio",
      piva:"02012320020"
    }

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('configTableController',function($scope){

  $scope.aggiungiTavolo=function()  {
    this.tavoli.push(
      {
        sala:this.sala,
        numero:this.numero,
        coperti:this.coperto
      });
  };

  $scope.tavoli=[];
  })



/*
oggetti:
 $scope  contesto dei dati su vista (html)
 $http   oggetto per caricare dati (spesso json) da internet
  */
  .controller('goodController',function($scope,$http){
    $http.get("data/ricette.json").then(function(list) {
        $scope.list=list.data;
      });
  })
  .controller('ricettarioController',function($scope,$http){

    $http.get("http://localhost:8100/data/ricette.json").then(function(item) {
      $scope.good=item.data[0];
    });

  })

  .controller('fatturaController',function($scope){

  })



