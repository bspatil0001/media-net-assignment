'use strict';

/**
 * @ngdoc directive
 * @name stockSocketApp.directive:highlight
 * @description
 * # highlight
 */
angular.module('stockSocketApp').directive('highlighter', [
  '$timeout',
  function($timeout) {
    return {
      restrict: 'ACE',
      scope: {
        model: '=highlighter'
      },
      link: function(scope, element) {
        scope.$watch('model', function(nv, ov) {
          console.log(element);

          element.removeClass('highlight1');
          element.removeClass('highlight2');

          if (nv < ov) {
            console.log(nv, ov);

            element.addClass('highlight1');
          }
          else if (nv > ov) {
            element.addClass('highlight2');
          }
        });
      }
    };
  }
]);
