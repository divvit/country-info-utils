angular.module('divvitController',[])
   // inject the report service factory into our controller
   .controller('countryInfoController', ['$scope','CountryInfo', function($scope, CountryInfo ) {
      $scope.countryList = CountryInfo.getCountryList();

      $scope.currencyList = CountryInfo.getCurrencyList();
      $scope.changeCurrency = function(currencyCode){
         $scope.currencyName = CountryInfo.getCurrencyName(currencyCode);
         $scope.currencySymbol = CountryInfo.getCurrencySymbols(currencyCode);
         $scope.currencyHtmlCode= CountryInfo.getCurrencyHtmlCode(currencyCode);
      };

      $scope.changeCountry = function(countryCode){
         $scope.countryName = CountryInfo.getCountryName(countryCode);
      };
   }
]);
