var app = angular.module('plunker', []);

app.controller('mainController', function($scope, $http)
{
    var onComplete = function(response) 
    {
        $scope.user = response.data;
    }

    $http.get('https://api.github.com/users/tfutada')
    .then(onComplete);

});
