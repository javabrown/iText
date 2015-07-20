angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Languages', function() {
  // Might use a resource here that returns a JSON array
  var headerText = 'Select Language';
  var googleToLanguageCode = 'hi';
  
  // Some fake testing data
  var fonts = [{
    id: 0,
    name: 'HINDI',
    code: 'hi',
    icon: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }, {
    id: 1,
    name: 'URDU',
    code: 'ur',
    icon: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }, {
	id: 2,
	name: 'ARABIC',
	code: 'ar',
	icon: 'https://avatars1.githubusercontent.com/u/2903780?v=3&s=460'
  }];

  return {
    all: function() {
      return fonts;
    },
    remove: function(chat) {
      fonts.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    
    getHeaderText: function(){
     return headerText;
    },
    
    getGoogleToLanguageCode: function() {
      return googleToLanguageCode;
    },
    
    setGoogleToLanguageCode: function(toLanguage) {
        googleToLanguageCode = toLanguage;
    },
  }
});