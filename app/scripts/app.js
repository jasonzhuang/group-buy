'use strict';

var app = angular.module('app',['ui.bootstrap']);

app.constant('servicesConfig',
    {
        SERVICE_URL: 'http://api.dianping.com/',
        CITIES_API: 'v1/metadata/get_cities_with_businesses,',
        CATEGORY_API: 'v1/metadata/get_categories_with_businesses',
        DEAL_API:'v1/deal/find_deals',
        COUPON_API:'v1/coupon/find_coupons'
    }
);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/deals',{
          templateUrl:'views/deals.html',
          controller:'DealCtrl'
        })
      .when('/coupons',{
          templateUrl:'views/coupons.html',
          controller:'CouponCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
});
