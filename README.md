A small library providing utility methods to get Country list, timezone for country, currency of country

## Installation

  npm install @divvit/country-info-utils --save

## Usage

  	var utility = require('@divvit/country-info-utils');

  	var countrList = utility.getCountryList();

  	console.log('Country list:' + countrList);

  	var timezone = utility.getCountryForTimezone('Europe/Stockholm');

  	console.log('Country for time zone:' + timezone);

  	var currency = utility.getCurrencyList();

  	console.log('Currency list:' + currency);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
* 1.0.0 Sharing modules between NodeJS and AngularJS release
