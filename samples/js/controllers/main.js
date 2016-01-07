angular.module('divvitController',[])
   // inject the report service factory into our controller
   .controller('countryInfoController', ['$scope','CountryInfo', function($scope, CountryInfo ) {
      $scope.countryList = CountryInfo.getCountryList();

      $scope.currencyList = CountryInfo.getCurrencyList();
      $scope.changeCountry = function(){

      }
   }
]);
