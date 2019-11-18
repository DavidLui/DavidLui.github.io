var node = angular.module("node", []);

node.config(function ($routeProvider) {
  $routeProvider
      .when('/:message',
    {
      templateUrl:"node.html",
      controller: "nodeCtrl"
    })
});

node.controller("nodeCtrl", function ($scope, $routeParams) {

    $scope.model = {
      message: $routeParams.message
    }
    }
});
