A small library providing utility methods to get Country list, timezone for country, currency of country

## v1.3.1 Stable

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

        	var timezone = utility.getCountryForTimezone('Europe/Stockholm');

        	console.log('Country for time zone:' + timezone);

        	var currency = utility.getCurrencyList();

        	console.log('Currency list:' + currency);

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
