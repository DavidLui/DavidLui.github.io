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
 

   var movies = {};
   var theaters = {};
   //var link = "http://www.fandango.com/rss/moviesnearme_"+ 10013 + ".rss";
   // $http.get(link)
   //.then(function(response) {$scope.fandango = response.data;});


        $http({
            method  : 'GET',
            url     : 'http://www.fandango.com/rss/moviesnearme_10013/',
            timeout : 10000,
            params  : {},  // Query Parameters (GET)
            transformResponse : function(data) {
                // string -> XML document object
                return $.parseXML(data);
            }
        }).success(function(data, status, headers, config) {
            console.dir(data);  // XML document object
            $scope.xml = data.documentElement.innerHTML;
        }).error(function(data, status, headers, config) {
            alert('ahhhh.');
        });

});

