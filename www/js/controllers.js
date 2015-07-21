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

   $scope.navCategory = "LANGUAGES";
  
   $scope.$watch(function(){return Languages.getGoogleToLanguageCode()}, function(newVal, oldVal){
		    console.log(newVal + ' ' + oldVal);
		    console.log(newVal);
		    $scope.changeFont(newVal);
		    return;
		    
	  }, true);
 
   $scope.control = new google.elements.transliteration.TransliterationControl({
			sourceLanguage:
			google.elements.transliteration.LanguageCode.ENGLISH,
			destinationLanguage: [google.elements.transliteration.LanguageCode.HINDI],
			shortcutKey: 'ctrl+e',
			transliterationEnabled: true
   });
   
   $scope.updateEditor = function() {
	    var element = document.getElementById("page_content");
	    element.style.height = element.scrollHeight + "px";
   };
  
   angular.element(document).ready(function () {
 		$scope.fBind();
   });
	
	$scope.loadLanguage = function(){
		$scope.control.makeTransliteratable(['transliterateTextarea']);
	};
	
	$scope.fBind = function(){
		google.setOnLoadCallback($scope.loadLanguage());
	};
	
	$scope.changeFont = function(langCode){
		$scope.control.setLanguagePair(google.elements.transliteration.LanguageCode.ENGLISH,
				langCode);
		console.log('font changed')
	}
})

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate, $stateParams, $timeout, Chats, Languages) {
  $scope.languages = Languages.all();
  $scope.headerText = Languages.getHeaderText();
  
  $scope.openMenu = function (navCategory) {
	  $scope.navCategory = navCategory;
	  $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.applyLanguage = function(languageCode){
	  Languages.setGoogleToLanguageCode(languageCode);
  };
});