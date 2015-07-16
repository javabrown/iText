angular.module('starter.directive', [])

 .directive('translate', ['$resource', function ($resource) {
            var translate = $resource('https://www.googleapis.com/language/translate/v2',
                {
                    key: 'AIzaSyDJvc2qI6BKR-it5ute6ZVxaYOkDOQV-w0'
                },
                {
                    'translate': {
                        method: 'GET'
                    }
                }
            );
 
            return {
                template: '{{value}}',
                scope: {
                    value: '=text'
                },
                link: function (scope, elem, attr) {
                    translate.translate({
                        source: attr.source,
                        target: attr.target,
                        q: attr.text
                    }).$promise.then(
                        function (result) {
                            if(typeof result.data.translations[0].translatedText !== 'undefined') {
                                scope.value = result.data.translations[0].translatedText
                            } else {
                                scope.value = attr.text;
                            }
                        }
                    )
                }
            };
        }])
        
        
	   .directive('googleplace', function() {
		    return {
		        require: 'ngModel',
		        scope: {
		            ngModel: '=',
		            details: '=?'
		        },

		        link: function(scope, element, attrs, model) {
		            var options = {
		                types: [],
		                componentRestrictions: {}
		            };
		            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
		 
		            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
		                scope.$apply(function() {
		                    scope.details = scope.gPlace.getPlace();
		                    model.$setViewValue(element.val());                
		                });
		            });
		        }

		    };
		});


        