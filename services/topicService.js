angular.module("codeLibrary").service("topicService", function() {

  var topics = [{
      name: 'git',
      state: 'git'
    },
    {
      name: 'html',
      state: 'html'
    },
    {
      name: 'css',
      state: 'css'
    },
    {
      name: 'css positioning',
      state: 'cssPositioning'
    },
    {
      name: 'advanced html',
      state: 'advHtml'
    },
    {
      name: 'advanced css',
      state: 'advCss'
    },
    {
      name: 'js fundamentals (functions)',
      state: 'jsFundamentals'
    },
    {
      name: 'js objects',
      state: 'jsObj'
    },
    {
      name: '"this" keyword',
      state: 'this'
    },
    {
      name: 'js callbacks',
      state: 'callbacks'
    },
    {
      name: 'js prototypes',
      state: 'prototypes'
    },
    {
      name: 'jquery',
      state: 'jquery'
    },
    {
      name: 'jquery 2',
      state: 'jquery2'
    },
    {
      name: 'angular',
      state: 'angular'
    },
    {
      name: 'angular services',
      state: 'angularServices'
    },
    {
      name: 'angular $http',
      state: 'angular$http'
    },
    {
      name: 'angular $q',
      state: 'angular$q'
    },
    {
      name: 'json p',
      state: 'jsonp'
    },
    {
      name: 'Angular UI-Router',
      state: 'angularRouter'
    },
    {
      name: 'Angular Directives',
      state: 'angularDirectives'
    },
    {
      name: 'firebase',
      state: 'firebase'
    },
    {
      name: 'Node.js',
      state: 'node'
    },
    {
      name: 'express.js',
      state: 'express'
    },
    {
      name: 'MongoDB',
      state: 'mongodb'
    },
    {
      name: 'Mongoose',
      state: 'mongoose'
    }
];

this.getTopics = function() {
  return topics;
}

});
