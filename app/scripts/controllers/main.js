'use strict';

app.controller('MainCtrl', function($scope, $location, remoteService, $rootScope){
    $scope.isLogin = false;
    //TODO:any better way ?
    $rootScope.selectedCity = "杭州";

    $scope.login = function(){
        $scope.isLogin = true;
    }

    remoteService.getCities().success(function(response){
        $scope.cities = response.cities;
    });

    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };

    $scope.$watch("city", function(newVal, oldVal){
        if(newVal !== oldVal) {
            $rootScope.selectedCity = newVal;
            console.log("city change to ", newVal);
        }
    });

});

