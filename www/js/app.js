// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
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
      StatusBar.styleLightContent();      
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  
  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

	.state('tab.account', {
		url: '/account',
		views: {
		  'tab-account': {
			templateUrl: 'templates/tab-account.html',
			controller: 'AccountCtrl'
		  }
		}
	})
	
    .state('tab.textpad', {
		url: '/textpad',
		views: {
		  'tab-textpad': {
			templateUrl: 'templates/textpad.html',
			controller: 'TextPadCtrl'
		  },
		  
		  'menuContent': {
                  templateUrl: "templates/menu.html"
          }
           
		}
	});
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate, $stateParams, $timeout, Chats, Languages) {
  $scope.languages = Languages.all();
  $scope.headerText = Languages.getHeaderText();//{"id": {"NONE"}, "label":{"Select Language"}}; //none;
  
  $scope.openMenu = function (navCategory) {
	  $scope.navCategory = navCategory;
	  $ionicSideMenuDelegate.toggleLeft();//alert(JSON.stringify("RK : " + $scope.chats));
  };
  
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.applyLanguage = function(languageCode){
	  //alert("applyLanguage="+languageCode); 
	  Languages.setGoogleToLanguageCode(languageCode);
	  
	  //$timeout(function(){ $ionicSideMenuDelegate.toggleLeft()}, 1000);//hide
  };
});