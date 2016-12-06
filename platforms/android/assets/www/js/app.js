
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.platform.android.tabs.position("bottom");
  $ionicConfigProvider.tabs.style('standard');
  
      $stateProvider
        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "templates/home.html",
              controller: 'HomeTabCtrl'
            }
          }
        })
       
       
        .state('tabs.about', {
          url: "/about",
          views: {
            'about-tab': {
              templateUrl: "templates/about.html"
            }
          }
        })
        
        .state('tabs.contact', {
          url: "/contact",
          views: {
            'contact-tab': {
              templateUrl: "templates/contact.html"
            }
          }
        });


       $urlRouterProvider.otherwise("/tab/home");

    });