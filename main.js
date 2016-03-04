var app = angular.module("app", []);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/page/:id',
  {
    templateUrl: "app.html",
    controller: "AppCtrl"
  });
});

app.controller("AppCtrl", function ($scope, $routeParams){//, $http) {

  $.support.cors = true;

  $.ajax({
    crossDomain: true,
    url: "http://www.fandango.com/rss/moviesnearme_10013.rss",
    type: "POST",
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    dataType: "xml",
    //data: soapMessage,
    success: function (data) {
      $scope.fandango = data;
    }
  });
  // $scope.params = $routeParams;
  // $.support.cors = true;
  // $.ajax({
  //   url: 'http://www.fandango.com/rss/moviesnearme_10013.rss',
  //   dataType: 'JSONP',
  //   jsonpCallback: 'callback',
  //   type: 'GET',
  //   success: function (data) {
  //     $scope.fandango = data;
  //   }
  // });

  // var script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.src = 'http://www.fandango.com/rss/moviesnearme_10013?callback=my_callback';
  // document.body.appendChild(script);
  //
  // mycallback = function(data){
  //   alert("test");
  // };

  var movies = {};
  var theaters = {};


});
