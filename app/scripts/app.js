'use strict';

var app = angular.module('RPSApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
