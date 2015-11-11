var app = angular.module('plunker', []);

app.controller('mainController', function($scope, $http)
{
    var onComplete = function(response) 
    {
        $scope.user = response.data;
    };

    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
        .then(onComplete);
    };
    
});
