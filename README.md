A small library providing utility methods to get Country list, timezone for country, currency of country

## v1.6.0 Stable

- NPM: `npm install @divvit/country-info-utils --save`
- Bower: `bower install divvit-country-info-utils --save --save`
- Zip: [Download](https://github.com/divvit/country-info-utils/archive/master.zip)

## Examples
   - Using with Node via npmjs
      - Installation

        npm install @divvit/country-info-utils --save

      - Usage

        	var utility = require('@divvit/country-info-utils');

        	var countrList = utility.getCountryList();

        	console.log('Country list:' + countrList);

         var countryName = utility.getCountryName('vn');

         console.log('Country name:' + countryName);

        	var timezone = utility.getCountryForTimezone('Europe/Stockholm');

        	console.log('Country for time zone:' + timezone);

        	var currency = utility.getCurrencyList();

        	console.log('Currency list:' + currency);

         var currencySymbol = utility.getCurrencySymbols('vnd');

         console.log('Currency symbol:' + currencySymbol);

         var currencyHtmlCode = utility.getCurrencyHtmlCode('vnd');

         console.log('Currency html code:' + currencyHtmlCode);

         var currencyName = utility.getCurrencyName('vnd');

         console.log('Currency name:' + currencyName);

   - Using with Angularjs via bowerjs

      [Examples](https://github.com/divvit/country-info-utils/tree/master/samples)


## Tests

  npm test

## Contributing

Anh Nguyen, Nino Ulsamer, Divvit AB

## Release History

* 0.1.0 Initial release
* 1.1.0 Sharing modules between NodeJS and AngularJS release
* 1.1.1 Fixed AngularJS module name release
* 1.2.0 add AngularJS samples, make minfy js file release
* 1.3.0 add new method get currency symbols by currency release
* 1.3.1 upcase currency code in method get currency symbols by currency release
* 1.4.0 fix error symbols by currency release
* 1.5.0 add new method get currency name, get currency symbol by html code by currency code
* 1.6.0 add new method get country name by country code
