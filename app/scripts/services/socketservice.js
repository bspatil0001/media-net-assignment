'use strict';

/**
 * @ngdoc service
 * @name stockSocketApp.socketService
 * @description
 * # socketService
 * Service in the stockSocketApp.
 */
angular.module('stockSocketApp').service('socketService', function($rootScope) {

  var oldData = [];
  var test = [];

  function onMessage(evt) {
    // console.log(evt);
  }

  var websocket = new WebSocket("ws://stocks.mnet.website");

  function testWebSocket() {
    websocket.onopen = function(evt) {
      onOpen(evt)
    };

    websocket.onclose = function(evt) {
      onClose(evt)
    };

    websocket.onmessage = function(evt) {
      onMessage(evt)
    };
    websocket.onerror = function(evt) {
      onError(evt)
    };
  }

  testWebSocket();

  function onOpen(evt) {}
  function onMessage(evt) {
    var data = JSON.parse(evt.data);
    if (!oldData.length) {
      $rootScope.$apply(function() {
        $rootScope.stockData = test;
      });
      oldData = data;
    } else {
      test = [];
      for (var i = 0; i < data.length; i++) {
        test.push(data[i])
        for (var j = 0; j < oldData.length; j++) {
          if (oldData[j][0] == data[i][0]) {
            if (oldData[j][1] > data[i][1]) {
              test[i][2] = "highlight1"
              break;
            } else if (oldData[j][1] < data[i][1]) {
              test[i][2] = "highlight2"
              break;
            }
          }
        }
      }

      oldData = test;
      $rootScope.$apply(function() {
        $rootScope.stockData = test;
      });
    }
  }
});
