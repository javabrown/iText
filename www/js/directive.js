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
        }]);
        