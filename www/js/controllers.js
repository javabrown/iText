angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TextPadCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  
  $scope.updateEditor = function() {
	var element = document.getElementById("page_content");
	element.style.height = element.scrollHeight + "px";
  };
  
  $scope.gInit = function () {
	  alert('1');
	  google.load("elements", "1", {packages: "transliteration"});
	  alert('2');
	  google.setOnLoadCallback(function () {
			var options = {
					  sourceLanguage: 'en',
					  destinationLanguage: ['hi'],
					  shortcutKey: 'ctrl+g',
					  transliterationEnabled: true
					};
					// Create an instance on TransliterationControl with the required
					// options.
					var control = new google.elements.transliteration.TransliterationControl(options);
					// Enable transliteration in the textfields with the given ids.
					var ids = ["textarea"];
					control.makeTransliteratable(ids);
					// Show the transliteration control which can be used to toggle between
					// English and Hindi and also choose other destination language.
					control.showControl('translControl');
					alert('4');
			   }
	  );
	  alert('3');
  };
  
//  $scope.gLoad = function () {
//		var options = {
//		  sourceLanguage: 'en',
//		  destinationLanguage: ['hi'],
//		  shortcutKey: 'ctrl+g',
//		  transliterationEnabled: true
//		};
//		// Create an instance on TransliterationControl with the required
//		// options.
//		var control = new google.elements.transliteration.TransliterationControl(options);
//		// Enable transliteration in the textfields with the given ids.
//		var ids = ["textarea"];
//		control.makeTransliteratable(ids);
//		// Show the transliteration control which can be used to toggle between
//		// English and Hindi and also choose other destination language.
//		control.showControl('translControl');
//   };
   
});