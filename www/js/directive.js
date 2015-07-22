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
		})
		
		.directive('itext', function() {
		    var directive = {};
		
		    directive.restrict = 'E';
		    //directive.templateUrl = "file.html";
		    directive.template = 
		     "<textarea ng-model='ival' name='{{name}}' rows='{{rows}}' cols='{{cols}}' />";
		     
		    directive.scope = {
		 
		    }
		
		    directive.link = function($scope, element, attributes) {
		      element.css("background:url(../img/line.png) repeat;height:auto;width:100%; height: 100%;color:#333; font-weight:200; font-size:20px; font-family:'Ubuntu', Helvetica, Arial, sans-serif; border-radius:3px; line-height:2em; border:none; padding:30px; font: normal 14px verdana; line-height: 25px; padding: 2px 10px;");
		      $scope.textarea = element;
		      $scope.id = attributes.id;
		      $scope.name = attributes.name;
		      $scope.rows = attributes.rows;
		      $scope.cols = attributes.cols;
		      
		      $scope.ival = localStorage.getItem('text');
		       
		      
		      element.bind ("keyup", function() {
		        localStorage.setItem('text', $scope.ival);
		        console.log("Saved File Content:" + localStorage.getItem('text'));
		      });
		
		      //element.css("background-color", "gray");
		    }
		
		    return directive;
		})
		
		;


        