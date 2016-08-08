/* global it, describe */
import countryFunctions from '../src/main'
import {expect} from 'chai'

describe('#getCountryList', () => {
  const countryList = countryFunctions.getCountryList()
  it('should return list/arrays of the country', () => {
    expect(Array.isArray(countryList)).to.be.true
  })

  it('should not empty list of the country', () => {
    expect(countryList.length > 0).to.be.true
  })
})

describe('#getCountryForTimezone', () => {
  it('should return null if timezone doesn\'t exist', () => {
    const timezone = countryFunctions.getCountryForTimezone('Wrong Name')
    expect(timezone).to.be.null
  })

  it('should return correct country code', () => {
    const timezone = countryFunctions.getCountryForTimezone('Asia/Samarkand')
    expect(timezone).to.be.equal('UZ')
  })
})

describe('#getTimezonesForCountry', () => {
  it('should return array of timezones for countryCode', () => {
    const timezoneList = countryFunctions.getTimezonesForCountry('uz')
    expect(timezoneList).to.deep.equal(['Asia/Samarkand', 'Asia/Tashkent'])
  })

  it('should return empty array if country code is wrong', () => {
    const timezoneList = countryFunctions.getTimezonesForCountry('aa')
    expect(timezoneList).to.deep.equal([])
  })
})
