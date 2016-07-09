var app = angular.module('TimePicker', ['ngSanitize', 'ui.bootstrap', 'ui.select']);

app.controller('TimePickerController', ['$scope', '$filter', function($scope, $filter) {

    $scope.cities = moment.tz.names();
    $scope.city = {
      selected: $scope.cities[Math.floor(Math.random() * $scope.cities.length)]
    }
    
    $scope.groupByCountry = (city) => city.substring(0, city.indexOf('/'));

    $scope.getLocalTime = function() {
        var offset = moment().tz($scope.city.selected).utcOffset() / 60;
        const localOffset = moment().utcOffset() / 60,
            sign = offset > 0 ? '+' : '-',
            filteredtime = $filter('date')($scope.time, 'yyyy-MM-ddTHH:mm:ss');

        offset = Math.abs(offset);
        if (offset % 10 === offset) {
            offset = "0" + offset;
        }
        
        return moment.utc(filteredtime + sign + offset + ":00")
            .add(localOffset, 'hour')
            .format('HH:mm');
    };
  
}]);