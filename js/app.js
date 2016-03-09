angular.module("codeLibrary", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
 $urlRouterProvider.otherwise('/');
   $stateProvider
           .state('git',{
             url: '/git',
             templateUrl: '/views/gitTemplate.html',
             controller: 'mainCtrl'
           })
           .state('html',{
             url: '/html',
             templateUrl: '/views/htmlTemplate.html',
             controller: 'mainCtrl'
           })
           .state('css',{
             url: '/css',
             templateUrl: '/views/cssTemplate.html',
             controller: 'mainCtrl'
           })
           .state('cssPositioning',{
             url: '/cssPositioning',
             templateUrl: '/views/cssPosTemplate.html',
             controller: 'mainCtrl'
           })
           .state('advHtml',{
             url: '/advHtml',
             templateUrl: '/views/advHtmlTemplate.html',
             controller: 'mainCtrl'
           })
           .state('advCss',{
             url: '/advCss',
             templateUrl: '/views/advCssTemplate.html',
             controller: 'mainCtrl'
           })
           .state('jsFundamentals',{
             url: '/jsFundamentals',
             templateUrl: '/views/jsFundTemplate.html',
             controller: 'mainCtrl'
           })
           .state('jsObj',{
             url: '/jsObj',
             templateUrl: '/views/jsObjTemplate.html',
             controller: 'mainCtrl'
           })
           .state('this',{
             url: '/this',
             templateUrl: '/views/thisKeyTemplate.html',
             controller: 'mainCtrl'
           })
           .state('callbacks',{
             url: '/callbacks',
             templateUrl: '/views/jsCallbackTemplate.html',
             controller: 'mainCtrl'
           })
           .state('prototypes',{
             url: '/prototypes',
             templateUrl: '/views/jsProtoTemplate.html',
             controller: 'mainCtrl'
           })
           .state('jquery',{
             url: '/jquery',
             templateUrl: '/views/jqueryTemplate.html',
             controller: 'mainCtrl'
           })
           .state('jquery2',{
             url: '/jquery2',
             templateUrl: '/views/jquery2Template.html',
             controller: 'mainCtrl'
           })
           .state('angular',{
             url: '/angular',
             templateUrl: '/views/ang.html',
             controller: 'mainCtrl'
           })
          .state('angularServices',{
             url: '/angularServices',
             templateUrl: '/views/angServiceTemplate.html',
             controller: 'mainCtrl'
           })
           .state('angular$http',{
             url: '/angular$http',
             templateUrl: '/views/angHttpTemplate.html',
             controller: 'mainCtrl'
           })
          .state('angular$q',{
             url: '/angular$q',
             templateUrl: '/views/angQTemplate.html',
             controller: 'mainCtrl'
           })
           .state('jsonp',{
             url: '/jsonp',
             templateUrl: '/views/jsonPTemplate.html',
             controller: 'mainCtrl'
           })
          .state('angularRouter',{
             url: '/angularRouter',
             templateUrl: '/views/angUiRouterTemplate.html',
             controller: 'mainCtrl'
           })
           .state('angularDirectives',{
             url: '/angularDirectives',
             templateUrl: '/views/angDirectiveTemplate.html',
             controller: 'mainCtrl'
           })
           .state('firebase',{
             url: '/firebase',
             templateUrl: '/views/firebaseTemplate.html',
             controller: 'mainCtrl'
           })
           .state('node',{
             url: '/node',
             templateUrl: '/views/nodeJsTemplate.html',
             controller: 'mainCtrl'
           })
           .state('express',{
             url: '/express',
             templateUrl: '/views/expressJsTemplate.html',
             controller: 'mainCtrl'
           })
           .state('mongodb',{
             url: '/mongodb',
             templateUrl: '/views/mongoDbTemplate.html',
             controller: 'mainCtrl'
           })
           .state('mongoose',{
             url: '/mongoose',
             templateUrl: '/views/mongooseTemplate.html',
             controller: 'mainCtrl'
           })

 })
