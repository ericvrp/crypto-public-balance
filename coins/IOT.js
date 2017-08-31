var Promise = require('bluebird')   // http://bluebirdjs.com
var rp = require('request-promise') // https://github.com/request/request-promise

var IOTA = require('iota.lib.js') // https://github.com/iotaledger/iota.lib.js
var iota = new IOTA({ provider: 'http://node01.iotatoken.nl:14265' })
var iotaApiGetBalances = Promise.promisify(iota.api.getBalances, {context: iota.api})


const get = (publicAddresses, balances) => {
  const newPromise = iotaApiGetBalances(publicAddresses, 100)
  newPromise.then(json => {
    // console.log(json)
    for (const balance of json.balances) {
      balances.push([balance / 10**6, 'IOT'])
    }
  })
  return newPromise
} // end of get(...)


module.exports = {
  get
}
