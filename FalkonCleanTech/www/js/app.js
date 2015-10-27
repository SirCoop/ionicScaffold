angular.module('fcs', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
    $stateProvider
      .state('app.home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
    $stateProvider
      .state('app.people', {
        url: '/people',
        templateUrl: 'templates/people.html',
        controller: 'PeopleController'
      })
  })

  .controller('MainController', ['$scope', '$state', function($scope, $state) {
    console.log('main controller active');
    //window.open('http://fcsnetworks.com/', '_self', 'location=yes'); return false;
    $scope.getPeople = function () {
      $state.go('app.people');
    }
    $scope.goHome = function () {
      $state.go('app.home');
    }
  }])

  .controller('HomeController', ['$scope', function($scope) {
    console.log('home controller active');
  }])
  .controller('PeopleController', ['$scope', function($scope) {
    console.log('people controller active');
    $scope.people = ['Foo', 'Bar', 'Baz'];
  }])

  .run(function($ionicPlatform, $timeout, $state) {
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
  });

