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
          // console.log(element);

          // element.removeClass('highlight1');
          // element.removeClass('highlight2');
          //
          // if (nv < ov) {
          //   // apply class
          //   console.log(nv, ov);
          //
          //   // element.removeClass('highlight1');
          //   // element.removeClass('highlight2');
          //
          //   element.addClass('highlight1');
          //
          //   // auto remove after some delay
          //   $timeout(function() {
          //     // element.removeClass('highlight1');
          //     // element.removeClass('highlight2');
          //   }, 1000);
          // }
          // else if (nv > ov) {
          //   // apply class
          //   element.addClass('highlight2');
          //
          //   // auto remove after some delay
          //   $timeout(function() {
          //     // element.removeClass('highlight1');
          //     // element.removeClass('highlight2');
          //   }, 1000);
          // }
        });
      }
    };
  }
]);
