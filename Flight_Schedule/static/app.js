angular.module('app1', [
  'app1.module',
  'ngRoute'
])
.config(function ($routeProvider) {
	console.log('helloopo')
  $routeProvider
    .when('/signin', {
      templateUrl: 'test.html',
      controller: 'myapp'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
})