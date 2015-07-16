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
  
  $scope.gPlace;
  
   $scope.updateEditor = function() {
	var element = document.getElementById("page_content");
	element.style.height = element.scrollHeight + "px";
   };
  
   angular.element(document).ready(function () {
 		$scope.fBind();
   });

  
   $scope.onLoad = function(){
		var options = {
			sourceLanguage:
			google.elements.transliteration.LanguageCode.ENGLISH,
			destinationLanguage:
			[google.elements.transliteration.LanguageCode.HINDI],
			shortcutKey: 'ctrl+e',
			transliterationEnabled: true
		};

		// Create an instance on TransliterationControl with the required
		// options.
		var control =
		new google.elements.transliteration.TransliterationControl(options);

		// Enable transliteration in the textbox with id
		// 'transliterateTextarea'.
		control.makeTransliteratable(['transliterateTextarea']);
		alert('done inside');
	};
	
	$scope.fBind = function(){
		google.setOnLoadCallback($scope.onLoad());
		alert('done outside');
	};

});