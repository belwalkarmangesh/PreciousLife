﻿'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });
    $routeProvider.when("/dashboard", {
        controller: "dashboardController",
        templateUrl: "/app/views/dashboard.html"
    });
    $routeProvider.when("/searchDonor", {
        controller: "searchDonorController",
        templateUrl: "/app/views/searchDonor.html"
    });
    $routeProvider.otherwise({ redirectTo: "/pagenotfound" });

});

var serviceBase = 'http://localhost:59463/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    
});

app.config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
        html: true
    });
});

app.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
app.all("/api/*", function () {
    $http.request.header("Access-Control-Allow-Origin", "*");
    $http.request.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    $http.request.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return $http.next();
});
app.run(['authService', function (authService) {

}]);    