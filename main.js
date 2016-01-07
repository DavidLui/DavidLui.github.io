var app = angular.module("app", []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/page/:id',
    {
      templateUrl: "app.html",
      controller: "AppCtrl"
    });
});

app.controller("AppCtrl", function ($scope,$routeParams, $http) {

  $scope.model = {
    message: $routeParams.id
  };


var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'http://www.fandango.com/rss/moviesnearme_11790/';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.send();




   var movies = {};
   var theaters = {};
   var link = "http://www.fandango.com/rss/moviesnearme_"+ 10013 + ".rss";
   $http.get(link)
   .then(function(response) {$scope.fandango = response.data;});


        // $http({
        //     method  : 'GET',
        //     url     : 'http://www.fandango.com/rss/moviesnearme_10013/',
            
        //     timeout : 10000,
        //     params  : {},  // Query Parameters (GET)
        //     transformResponse : function(data) {
        //         // string -> XML document object
        //         return $.parseXML(data);
        //     }
        // }).success(function(data, status, headers, config) {
        //     console.dir(data);  // XML document object
        //     $scope.xml = data.documentElement.innerHTML;
        // }).error(function(data, status, headers, config) {
            
        // });

});

