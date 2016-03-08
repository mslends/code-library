angular.module("codeLibrary").controller('mainCtrl', function($scope, topicService) {


$scope.topics = topicService.getTopics();
$scope.test = "HEy";
// $(document).ready(function(){
//     $(".fa").hover(function(){
//         $(this).removeClass('fa-3x').addClass('fa-4x')
//       }, function(){
//         $(this).removeClass('fa-4x').addClass('fa-3x');
//       });
//   });


});
