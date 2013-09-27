/**
 * Created with JetBrains WebStorm.
 * User: jason
 * To change this template use File | Settings | File Templates.
 */
app.factory('remoteService',function(servicesConfig, $http){
    var appkey = "9756483050";
    var secret = "c1260d6d0d1548ec9cc3d9aa95e7836e";

    var getURL = function(apiURL, params) {
        var paramArray = [];
        paramArray.push(appkey);

        params = params || [];
        var array = [];
        for(var key in params)
        {
            array.push(key);
        }
        array.sort();

        for(var index in array)
        {
            var key = array[index];
            paramArray.push(key + params[key]);
        }

        paramArray.push(secret);
        var shaSource = paramArray.join("");
        var sign = new String(CryptoJS.SHA1(shaSource)).toUpperCase();

        var queryArray = [];
        queryArray.push("appkey=" + appkey);
        queryArray.push("sign=" + sign);
        for(var key in params)
        {
            queryArray.push(key + "=" + params[key]);
        }
        var queryString = queryArray.join("&");
        var url = servicesConfig.SERVICE_URL + apiURL + "?" + queryString;
        return url;
    };

    return {
      getCities:function(){
         return $http.get('data/cities.json');
      },
      getCategory:function(){
         return $http.get('data/category.json');
      },
      getStores:function(){
        return $http.get('data/stores.json');
      },
      getCoupons:function(){
        return $http.get('data/coupon.json');
      },
      getDeals:function(){
        return $http.get('data/deals.json');
      }
    }
});