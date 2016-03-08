angular.module("codeLibrary").service("topicService", function() {

  var topics = [{
      name: 'git'
    },
    {
      name: 'html'
    },
    {
      name: 'css'
    },
    {
      name: 'css positioning'
    },
    {
      name: 'advanced html'
    },
    {
      name: 'advanced css'
    },
    {
      name: 'js fundamentals (functions)'
    },
    {
      name: 'js objects'
    },
    {
      name: '"this" keyword'
    },
    {
      name: 'js callbacks'
    },
    {
      name: 'js prototypes'
    },
    {
      name: 'jquery'
    },
    {
      name: 'jquery 2'
    },
    {
      name: 'angular'
    },
    {
      name: 'angular services'
    },
    {
      name: 'angular $http'
    },
    {
      name: 'angular $q'
    },
    {
      name: 'json p'
    },
    {
      name: 'Angular UI-Router'
    },
    {
      name: 'Angular Directives'
    },
    {
      name: 'firebase'
    },
    {
      name: 'Node.js'
    },
    {
      name: 'express.js'
    },
    {
      name: 'MongoDB'
    },
    {
      name: 'Mongoose'
    }
];

this.getTopics = function() {
  return topics;
}

});
