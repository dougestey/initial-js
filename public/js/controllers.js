'use strict';

/* Controllers */

angular.module('initialApp.controllers', []).
  controller('AppCtrl', function ($scope, $http, $location) {

  	//load foundation js on document.ready
  	angular.element(document).ready(function () {
    	$rootScope.$apply($(document).foundation());
    });

    //Write your first controller here

  });