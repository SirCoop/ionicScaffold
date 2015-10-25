// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('fcs', ['ionic'])

  .controller('HomeController', ['$scope', function($scope) {
    console.log('home controller active');
    //window.open('http://fcsnetworks.com/', '_self', 'location=yes'); return false;
  }])

  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('index', {
          url: '/',
          views: {
            home: {
              templateUrl: 'templates/home.html',
              controller: 'HomeController'
            }
          }
        })
  })

  .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
  })

