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
  .controller('goodController',function($scope,$http){
    $http.get("data/ricette.json").then(function(list) {
        $scope.list=list.data;
      });
  })
  .controller('ricettaController',function($scope,$http){
    $http.get("http://localhost:8100/data/ricette.json").then(function(item) {
      $scope.good=item.data[0];
    });
  })
  .controller('viniController',function($scope,$http) {
    $http.get("http://localhost:8100/data/vini.json").then(function(wines) {
      $scope.vini=wines.data;
    })
  })
  .controller('vinoController',function($scope,$http){
    $http.get("http://localhost:8100/data/vini.json").then(function(wines) {
      $scope.vino=wines.data[0];
    });
  })
  .controller('ingredientiController',function($scope,$http){
    $http.get("http://localhost:8100/data/ingredienti.json").then(function(ingredienti) {
      $scope.list=ingredienti.data;
    });
  })
  .controller('ingredienteController',function($scope,$http){
    $http.get("http://localhost:8100/data/ingredienti.json").then(function(ingrediente) {
      $scope.ingrediente=ingrediente.data[0];
    });
  })
  .controller('groupsController',function($scope,$http){
    $http.get("http://localhost:8100/data/groups.json").then(function(groups) {
      $scope.list=groups.data;
    });
  })





.controller('listaSpesaController',function($scope){
   $scope.aggiungiSpesa=function()  {
     this.ingrediente.push(
         {
           name:this.name,
           img:this.img
          });
   };
    $scope.ingrediente=[];
   })

//.controller('goodController',function($scope,$http){
//   $http.get("data/ricette.json").then(function(list) {
//     $scope.list=list.data;
//    });
//  })
    //




  .controller('fatturaController',function($scope){

  })



