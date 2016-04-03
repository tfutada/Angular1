/**
 * Created by taka on 4/3/16.
 */
ons.bootstrap()
    .controller('MyCtrl', ['$scope', function($scope) {
        $scope.MyDelegate = {
            configureItemScope: function(index, itemScope) {
                console.log("Created item #" + index);
                itemScope.item = {
                    name: 'Item #' + (index + 1)
                };
            },
            calculateItemHeight: function(index) {
                return 45;
            },
            countItems: function() {
                return 10000000;
            },
            destroyItemScope: function(index, scope) {
                console.log("Destroyed item #" + index);
            }
        };
    }]);