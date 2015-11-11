var app = angular.module('plunker', []);


app.controller('mainController', function($scope)
{
  $scope.name = 'World';
  $scope.firstName = 'abc';
});

app.controller('secondController', function($scope)
{
  $scope.name = 'World2';
  $scope.firstName = 'abc2';
});