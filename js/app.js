var app = angular.module("codeLibrary", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
 $urlRouterProvider.otherwise('/');
  //  $stateProvider
  //          .state('skills',{
  //            url: '/',
  //            templateUrl: '/views/skills.html',
  //            controller: 'mainCtrl'
  //          })
  //          .state('portfolio',{
  //            url: '/portfolio',
  //            templateUrl: '/views/portfolio.html',
  //            controller: 'mainCtrl'
  //          })
  //          .state('contact',{
  //            url: '/contact',
  //            templateUrl: '/views/contact.html',
  //            controller: 'mainCtrl'
  //  })
 })
