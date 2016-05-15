var app = angular.module('munkr', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })

      .state('posts', {
        url: '/post/:id',
        templateUrl: '/templates/post.html',
        controller: 'PostsCtrl'
      });

  $urlRouterProvider.otherwise('home');

}]);

app.controller('MainCtrl', [

  '$scope',
  'posts',

  function($scope, posts) {

    $scope.posts = posts.posts;

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.link = '';
      $scope.title = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }
]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){

    $scope.post = posts.posts[$stateParams.id];

    $scope.incrementUpvotes = function(comment) {
      comment.upvotes += 1;
    };

    $scope.addComment = function(){
      if($scope.body === '') {return ;}
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };

}]);

app.factory('posts', [function(){
  var p = {
    posts: [
      {title: 'Google', upvotes: 4, link: 'http://google.com', comments: [], id: 1},
      {title: 'Facebook', upvotes: 3, link: 'http://facebook.com', comments: [], id: 2},
      {title: 'Tumblr', upvotes:2, link: 'http://tumblr.com', comments: [], id: 3},
      {title: 'Quora', upvotes: 1, link: 'http://quora.com', comments: [], id: 4},
      {title: 'Instagram', upvotes: 6, link: 'http://instagram.com', comments: [], id: 5}
    ]
  };
  return p;
}]);