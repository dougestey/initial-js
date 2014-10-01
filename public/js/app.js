'use strict';

// Declare app level module which depends on filters, and services

angular.module('initialApp', [
  'ngRoute',
  'initialApp.controllers',
  'initialApp.filters',
  'initialApp.services',
  'initialApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'AppCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

}).run(function($rootScope){

  $rootScope.$apply($(document).foundation());

});