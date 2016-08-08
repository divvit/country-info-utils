/**
* CountryInfo methods
* Sharing code between client-side(angularjs) and server-side(Nodejs)
* A small library providing utility methods to get Country list, timezone for
* country, currency list of all country and zone
*/
import currencyList from './currency'
import countryList from './countries'
import timezones from './timezones'

module.exports = {
  /**
  * getCountryList function
  * Get all country with code and name.
  *
  * @return {Array} list of country
  */
  getCountryList: function() {
    return Object.keys(countryList)
      .reduce(function(acc, code) {
        return acc.concat({
          code: code,
          name: countryList[code].name
        })
      }, [])
      .sort(function(a, b) {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
  },

  /**
  * getCountryName function
  * return the country name of the country code
  *
  * @return {String} country name of country
  */
  getCountryName: function(countryCode) {
    if (!countryCode) return 'country code is not valid!'

    var country = countryList[countryCode.toUpperCase()]
    if (!country) return 'country not exist!'

    return country.name
  },

  /**
  * getCountryForTimezone function
  * return the timezone of the country
  *
  * @return {Object} Timezone of country
  */
  getCountryForTimezone: function(name) {
    const timezone = timezones.find(item => item.name === name)
    if (!timezone) return null

    return timezone.countryCode
  },

  getTimezonesForCountry: countryCode => {
    const filteredTimezones = timezones
      .filter(item => {
        return item.countryCode === countryCode.toUpperCase()
      })
      .map(item => item.name)
    return filteredTimezones
  },

  /**
  * getCurrencySymbols function
  * return currency symbol of the country
  *
  * @return {String} Currency symbol
  */
  getCurrencySymbols: function(currencyCode) {
    if (!currencyCode) return 'Currency code is not valid!'

    var currency = currencyList[currencyCode.toUpperCase()]
    if (!currency) return 'Currency not exist!'
    return currency.symbol
  },

  /**
  * getCurrencyHtmlCode function
  * return currency symbol of the country
  *
  * @return {String} Currency symbol by html code
  */
  getCurrencyHtmlCode: function(currencyCode) {
    if (!currencyCode) return 'Currency code is not valid!'

    var currency = currencyList[currencyCode.toUpperCase()]
    if (!currency) return 'Currency not exist!'
    return currency.htmlCode
  },

  /**
  * getCurrencyName function
  * return currency name of the country
  *
  * @return {String} Currency name
  */
  getCurrencyName: function(currencyCode) {
    if (!currencyCode) return 'Currency code is not valid!'

    var currency = currencyList[currencyCode.toUpperCase()]
    if (!currency) return 'Currency not exist!'
    return currency.name
  },

  /**
  * getCurrencyList function
  * return all the Currency of the country
  *
  * @return {Array} Currency list
  */
  getCurrencyList: function() {
    return Object.keys(currencyList).map(key => {
      return {
        code: key,
        name: currencyList[key].name
      }
    })
  }
}
