var IOTA    = require('iota.lib.js') // https://github.com/iotaledger/iota.lib.js
var IOTAP   = require('iotap')       // https://github.com/jimthedev/iotap

const iota  = new IOTA({ host: 'https://n1.iota.nu', port: 443 })
const iotap = IOTAP.create(iota) // promisified iota library


const get = (publicAddresses) => {
  return iotap.getBalances(publicAddresses, 100).then(json => {
    // console.log(json)
    const balances = []
    for (const balance of json.balances) {
      // if (balance <= 0.00000) continue
      // console.log(balance)
      balances.push([balance / 10**6, 'IOT'])
    }
    return balances
  }).catch(console.error)
} // end of get(...)


module.exports = {
  get
}
