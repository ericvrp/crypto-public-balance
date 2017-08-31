var rp = require('request-promise') // https://github.com/request/request-promise


const get = (publicAddresses) => {
  let promises = []

  for (const address of publicAddresses) {
    const getAddressInfoURL = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`
    // console.log('URL ===>', getAddressInfoURL)

    promises.push( rp(getAddressInfoURL).then(html => {
      // console.log(html)
      const json     = JSON.parse(html) // convert to internal data structures to make sure we received valid data

      const balances = []
      balances.push([json.ETH.balance, 'ETH'])
      if (json.tokens) { // output ERC20 tokens information
        for (const token of json.tokens) {
          const { tokenInfo } = token
          const balance = token.balance / 10**tokenInfo.decimals
          balances.push([balance, tokenInfo.symbol])
        }
      }
      return balances
    }))
  } // next address

  return promises
  // return Promise.all(promises)
} // end of get(...)


module.exports = {
  get
}
