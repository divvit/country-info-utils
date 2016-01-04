var assert = require('assert');
var util = require('../index');
var countryList = util.getCountryList();
var timeZone = util.getCountryForTimezone('Europe/Stockholm');
var currencyList = util.getCurrencyList();

describe('#getCountryList', function() {
  it('should return list/arrays of the country', function() {
    assert(Array.isArray(countryList), 'Array of country');
  });

  it('should not empty list of the country', function() {
    assert(countryList.length > 0, 'not empty arrays');
  });
});

describe('#getCountryList', function() {
  it('should return timezone of the country', function() {
    assert.notEqual(timeZone, '');
  });

  it('should return "SE" for Europe/Stockholm', function() {
    assert.equal(timeZone, 'SE');
  });
});

describe('#getCurrencyList', function() {
  it('should return list/arrays of the currency', function() {
    assert(Array.isArray(currencyList), 'Array of currency');
  });

  it('should not empty list of the currency', function() {
    assert(currencyList.length > 0, 'not empty arrays');
  });
});