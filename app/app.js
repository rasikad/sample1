var app = angular.module("manifoldApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/insights_prefilterCtrl', {
            templateUrl: 'partials/insights_prefilter.html',
            controller: 'insights_prefilterCtrl'
        })
        .when('/insights', {
            templateUrl: 'partials/insights.html',
            controller: 'insightsCtrl'
        })
        .otherwise({
            redirectTo: '/insights_prefilterCtrl'
        });
});



