var app = angular.module('plunker', []);

app.controller('mainController', function($scope, $http)
{
    var onCompleteOnUser = function(response) 
    {
        $scope.user = response.data;
        
        // Cascading call to get repos of the particular user.
        $http.get('https://api.github.com/users/' + $scope.username + '/repos')
        .then(onCompleteOnRepos);
    };

    var onCompleteOnRepos = function(response) 
    {
        $scope.repos = response.data;
    };

    $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
        .then(onCompleteOnUser);
    };
    
});
