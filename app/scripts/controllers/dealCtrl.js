/**
 * Created with JetBrains WebStorm.
 * User: jason
 * To change this template use File | Settings | File Templates.
 */
app.controller('DealCtrl',function($scope, remoteService){
   remoteService.getDeals().success(function(data){
     $scope.dealData = {deals: data.deals, total: data.total_count};
   });

   remoteService.getCategory().success(function(data){
       $scope.allCategories = data["categories"];
   });
});