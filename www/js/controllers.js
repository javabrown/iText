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


.controller('TextPadCtrl', function($scope, $ionicSideMenuDelegate, $stateParams, $timeout, Chats, Languages) {

  $scope.navCategory = "LANGUAGES";// {"id":{"NONE"}, "label":{"Select Language"}};
  //$scope.googleToLangCode = "google.elements.transliteration.LanguageCode.HINDI";
  
  //$scope.$watch(Languages.googleToLangCode, 
	//	  function () { alert('changed:' +Languages.googleToLangCode); }, true);
   
	  $scope.$watch(function(){return Languages.getGoogleToLanguageCode()}, function(NewValue, OldValue){
		    console.log(NewValue + ' ' + OldValue);
		    console.log(NewValue);
		    
		    $scope.fBind(NewValue);
		    
		    return;
		    
	  }, true);
 
  
  $scope.settings = {
    enableFriends: true
  };
  
  $scope.gPlace;
  
   $scope.updateEditor = function() {
	var element = document.getElementById("page_content");
	element.style.height = element.scrollHeight + "px";
   };
  
   angular.element(document).ready(function () {
 	//	$scope.fBind('ur');
   });

  
//   $scope.onLoad = function(){
//		var options = {
//			sourceLanguage:
//			google.elements.transliteration.LanguageCode.ENGLISH,
//			destinationLanguage:
//			[google.elements.transliteration.LanguageCode.HINDI],
//			shortcutKey: 'ctrl+e',
//			transliterationEnabled: true
//		};
//
//		 
//		var control =
//		new google.elements.transliteration.TransliterationControl(options);
//
//		 
//		control.makeTransliteratable(['transliterateTextarea']);
//		alert('done');
//	};
	
	$scope.loadLanguage = function(languageCode){
		var options = {
			sourceLanguage:
			google.elements.transliteration.LanguageCode.ENGLISH,
			destinationLanguage: [languageCode],
			shortcutKey: 'ctrl+e',
			transliterationEnabled: true
		};
		
		var control = new google.elements.transliteration.TransliterationControl(options);
		//control.toggleTransliteration();
		control.makeTransliteratable(['transliterateTextarea']);
		//control.toggleTransliteration();
		//alert('done');
	};
	
	$scope.fBind = function(languageCode){
		//google.setOnLoadCallback($scope.onLoad());
		google.setOnLoadCallback($scope.loadLanguage(languageCode));
		//alert('done outside');
	};
});