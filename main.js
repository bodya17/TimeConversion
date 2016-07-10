var app = angular.module('TimePicker', ['ngSanitize', 'ui.bootstrap', 'ui.select']);

app.controller('TimePickerController', ['$scope', '$filter', function($scope, $filter) {

    $scope.cities = moment.tz.names(); // fetch all locations
    
    $scope.city = {
        selected: $scope.cities[Math.floor(Math.random() * $scope.cities.length)]
    };
    
    $scope.country = (city) => city.substring(0, city.indexOf('/')); // get country

    $scope.getLocalTime = function() {
        let m = moment.tz($filter('date')($scope.time, 'yyyy-MM-dd HH:mm'), $scope.city.selected);
        return  m.tz(moment.tz.guess()).format("HH:mm");
    };

}]);